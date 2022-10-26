import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { GameBoard } from 'features/board';

export const PlayPage: FC = () => {
  const params = useParams();

  return <GameBoard id={params.id as string} />;
};
