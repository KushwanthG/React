import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer';
import todoReducer from './reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});
