import { configureStore } from '@reduxjs/toolkit';
import { boardReducer } from 'features/board';

export const store = configureStore({
  reducer: {
    board: boardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
