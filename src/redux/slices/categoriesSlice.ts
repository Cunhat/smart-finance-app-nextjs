import { createSlice } from '@reduxjs/toolkit';
import { ICategory } from '../../models/Interfaces';
import { apolloClient } from '../../api/client';
import { getAllCategories } from '../../api/queries';

type CategoriesInitialState = {
  categories: ICategory[];
};

const initialState: CategoriesInitialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const setCategory = (categories: ICategory[]) => async (dispatch, getState) => {
  const newCategory = ['huahuah', 'rsrsrsrsrs'];

  dispatch(setCategories(newCategory));
};

export const loadCategories = (categories: ICategory[]) => async (dispatch, getState) => {
  const newCategory = ['Car', 'Fitness', 'Bitcoin'];

  // const teste = await apolloClient.query({ query: getAllCategories });
   debugger;

  dispatch(setCategories(categories));
};

export const { setCategories } = categoriesSlice.actions;
