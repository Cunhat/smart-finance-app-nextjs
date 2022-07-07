import { createSlice } from '@reduxjs/toolkit';
import { ICategory, ITag } from '@/models/Interfaces';

export type GeneralInfoInitialState = {
  categories: ICategory[];
  tags: ITag[];
};

const initialState: GeneralInfoInitialState = {
  categories: [],
  tags: [],
};

export const generalInfoSlice = createSlice({
  name: 'generalInfo',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setTags: (state, action) => {
      state.tags = action.payload;
    },
  },
});

export const saveTags = (tags: ITag[]) => async (dispatch, getState) => {
  dispatch(setTags(tags));
};

export const loadCategories = (categories: ICategory[]) => async (dispatch, getState) => {
  dispatch(setCategories(categories));
};

export const { setCategories, setTags } = generalInfoSlice.actions;
