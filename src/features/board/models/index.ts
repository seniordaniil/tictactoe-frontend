import { createAction, createReducer } from '@reduxjs/toolkit';

export interface IBoard {
  id: string;
  board: string[];
}

export const saveBoard = createAction<IBoard>('board/save');

export const boardReducer = createReducer<Record<string, string[]>>(
  {},
  (builder) =>
    builder.addCase(saveBoard, (state, { payload }) => {
      state[payload.id] = payload.board;
    }),
);
