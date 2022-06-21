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
import { PageTitle } from '../../components/Typography';
import { IMainItem, ISecondaryItem } from '../../models/TreeInterfaces/interfaces';
import { faTag, faRectangleList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CategoriesTags() {
  const { data, loading, error } = useQuery<IGetAllCategoriesRequest>(getAllCategories);
  const dispatch = useDispatch();
  const [dataToDisplay, setDataToDisplay] = useState<IMainItem[]>([]);

  useEffect(() => {
    if (data !== undefined && !loading) {
      let finalDataObjt: Array<IMainItem> = [];

      data.allCategories.forEach((category) => {
        let mainItemStruct: IMainItem = {
          name: category.name,
          id: category.id,
          editable: true,
          editableHandler: editableHandler,
          secondaryItems: [],
        };

        const arrayOfSecondaryItems: Array<ISecondaryItem> = [];
        category.subCategories.forEach((subItem) => {
          let secondaryStruct: ISecondaryItem = {
            name: subItem.name,
            id: subItem.id,
            editable: true,
            editableHandler: editableHandler,
          };
          arrayOfSecondaryItems.push(secondaryStruct);
        });
        mainItemStruct.secondaryItems = arrayOfSecondaryItems;
        finalDataObjt.push(mainItemStruct);
      });

      setDataToDisplay(finalDataObjt);
      dispatch(loadCategories(data.allCategories));
    }
  }, [data, loading]);

  //const categories = useSelector((state) => state.categories);

  const editableHandler = (id: string, name: string) => {
    console.log(id, name);
  };

  return (
    <SettingsPageLayout>
      <div>
        <FontAwesomeIcon icon={faTag} />
        <PageTitle title='Tags' />
      </div>
      <div>
        <FontAwesomeIcon style={{ width: '20px', height: '20px' }} icon={faRectangleList} />
        <PageTitle title='Categories' />
      </div>
      {dataToDisplay !== undefined && dataToDisplay?.length > 0 && loading ? <div>Loading...</div> : <Tree data={dataToDisplay}></Tree>}
    </SettingsPageLayout>
  );
}

export default CategoriesTags;
