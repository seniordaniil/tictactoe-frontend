import React, { FC } from 'react';
import { Caption } from 'ui';
import { useStart, useNewGameListener } from 'features/board';

export const HomePage: FC = () => {
  const start = useStart();
  useNewGameListener(start);

  return (
    <>
      <Caption>Loading...</Caption>
    </>
  );
};
