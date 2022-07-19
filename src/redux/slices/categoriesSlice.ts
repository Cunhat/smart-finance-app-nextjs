import { createSlice } from '@reduxjs/toolkit';
import { ICategory, ITag, IAccount } from '@/models/Interfaces';

export type GeneralInfoInitialState = {
  categories: ICategory[];
  tags: ITag[];
  accounts: IAccount[];
};

const initialState: GeneralInfoInitialState = {
  categories: [],
  tags: [],
  accounts: [],
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
    setAccounts: (state, action) => {
      state.accounts = action.payload;
    },
  },
});

export const saveTags = (tags: ITag[]) => async (dispatch, getState) => {
  dispatch(setTags(tags));
};

export const saveAccounts = (accounts: IAccount[]) => async (dispatch, getState) => {
  dispatch(setAccounts(accounts));
};

export const loadCategories = (categories: ICategory[]) => async (dispatch, getState) => {
  dispatch(setCategories(categories));
};

export const { setCategories, setTags, setAccounts } = generalInfoSlice.actions;
