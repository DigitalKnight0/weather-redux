import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import viewReducer from '../features/view/viewSlice';

export const store = configureStore({
  reducer: {
    view: viewReducer,
  },
});


