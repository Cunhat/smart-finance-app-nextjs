import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { PageLayout } from '../../components/PageLayout';
import { SettingsPageLayout } from '../../components/SettingsPageLayout';
import { useSelector, useDispatch } from 'react-redux';
import { loadCategories } from '../../redux/slices/categoriesSlice';
import { useQuery } from '@apollo/client';
import { getAllCategories } from '../../api/queries';
import { IGetAllCategoriesRequest } from '../../models/Interfaces';
import { Tree } from '../../components/Tree';

function CategoriesTags() {
  const { data, loading, error } = useQuery<IGetAllCategoriesRequest>(getAllCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data !== undefined && !loading) {
      dispatch(loadCategories(data.allCategories));
    }
  }, [data, loading]);

  const categories = useSelector((state) => state.categories);
  console.log(categories);

  return (
    <SettingsPageLayout>
      <>Categories and Tags</>
      {data !== undefined && data?.allCategories  && <Tree data={data.allCategories}></Tree>}
    </SettingsPageLayout>
  );
}

export default CategoriesTags;
