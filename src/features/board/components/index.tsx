import React, { FC, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Board } from 'tictactoe-game-modules';
import { RootState } from 'store';
import { useClient } from 'features/client';
import { saveBoard, IBoard } from '../models';
import { Caption, Centered } from 'ui';
import { Grid, GridCell } from '../ui';

interface BoardProps {
  id: string;
}

interface MoveArgs {
  id: string;
  position: number;
}

export const GameBoard: FC<BoardProps> = ({ id }) => {
  const client = useClient();
  const dispatch = useDispatch();

  const grid = useSelector<RootState, string[] | null>(
    (state) => state.board[id],
  );

  useEffect(() => {
    const listener = (board: IBoard) => {
      dispatch(saveBoard(board));
    };

    client?.on('board', listener);

    return () => {
      client?.off('board', listener);
    };
  }, [client, dispatch]);

  useEffect(() => {
    const listener = (args: MoveArgs) => {
      if (args.id !== id) return;
      let board = new Board(grid!);
      board = board.makeMove(args.position, 'O');
      dispatch(saveBoard({ id, board: board.grid }));
    };

    client?.on('move', listener);

    return () => {
      client?.off('move', listener);
    };
  }, [id, client, grid, dispatch]);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const position = parseInt(e.currentTarget.dataset.position as string);
      let board = new Board(grid!);

      if (board.isGameOver()) return;
      if (board.currentMark() !== 'X') return;
      if (board.isPositionTaken(position)) return;

      board = board.makeMove(position, 'X');

      dispatch(saveBoard({ id, board: board.grid }));
      client?.emit('makeMove', { id, position });
    },
    [id, grid, client, dispatch],
  );

  if (!grid) {
    client?.emit('getBoard', id);
    return <Caption>Loading...</Caption>;
  }

  const board = new Board(grid);

  let result: React.ReactNode;

  if (board.isGameOver()) {
    switch (board.winningPlayer()) {
      case 'X':
        result = <Caption>Вы победили!</Caption>;
        break;
      case 'O':
        result = <Caption>Вы проиграли!</Caption>;
        break;
      default:
        result = <Caption>Ничья!</Caption>;
    }
  }

  return (
    <>
      <Grid>
        {board.grid.map((player, index) => (
          <GridCell onClick={handleMove} key={index} data-position={index + 1}>
            {player}
          </GridCell>
        ))}
      </Grid>
      <Centered position={'absolute'} mt={20}>
        {result}
      </Centered>
    </>
  );
};
