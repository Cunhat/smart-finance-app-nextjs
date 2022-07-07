import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { generalInfoSlice } from './slices/categoriesSlice';
import thunk from 'redux-thunk';


export const store = configureStore(
  {
    reducer: {
      generalInfo: generalInfoSlice.reducer,
    },
  },
  applyMiddleware(thunk),
);

declare global {
  type RootState = ReturnType<typeof store.getState>
}

