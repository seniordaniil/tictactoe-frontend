import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { GameBoard, useNewGameListener } from 'features/board';

export const PlayPage: FC = () => {
  const params = useParams();
  useNewGameListener();

  return <GameBoard id={params.id as string} />;
};
