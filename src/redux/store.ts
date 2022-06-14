import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { categoriesSlice } from './slices/categoriesSlice';
import thunk from 'redux-thunk';

export const store = configureStore(
  {
    reducer: {
      categories: categoriesSlice.reducer,
    },
  },
  applyMiddleware(thunk),
);
