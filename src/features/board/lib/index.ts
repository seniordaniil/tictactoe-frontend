import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useClient } from 'features/client';
import { IBoard, saveBoard } from '../models';

export const useStart = () => {
  const client = useClient();

  return useCallback(() => {
    client?.emit('start');
  }, [client]);
};

export const useNewGameListener = (start?: () => void) => {
  const client = useClient();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (start) start();
  }, [start]);

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
};
