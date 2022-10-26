import React, { FC, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from 'ui';
import { useClient } from 'features/client';
import { IBoard, saveBoard } from 'features/board';

export const HomePage: FC = () => {
  const client = useClient();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = (board: IBoard) => {
      dispatch(saveBoard(board));
      navigate(`/${board.id}`);
    };

    client?.on('play', listener);

    return () => {
      client?.off('play', listener);
    };
  }, [client, navigate, dispatch]);

  const handleStart = useCallback(() => {
    client?.emit('start');
  }, [client]);

  return (
    <>
      <Button onClick={handleStart}>Start</Button>
    </>
  );
};
