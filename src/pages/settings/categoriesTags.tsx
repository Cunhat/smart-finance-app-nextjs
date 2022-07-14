import React, { useState, useEffect } from 'react';
import { SettingsPageLayout } from '@/components/SettingsPageLayout';
import { useDispatch } from 'react-redux';
import { loadCategories } from '@/redux/slices/categoriesSlice';
import { Tree } from '@/components/Tree';
import { TextIcon } from '@/components/Typography';
import { IMainItem, ISecondaryItem } from '@/models/TreeInterfaces/interfaces';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-regular-svg-icons';
import { Tag } from '@/components/Tag';
import { LinearContainer } from '@/components/Containers';

import { Button } from '@/components/Buttons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TitleSection } from '@/styles/Settings';
import { CreateTag } from '@/components/CreateTag';
import { CreateCategory } from '@/components/CreateCategory';
import { CreateSubCategory } from '@/components/CreateSubCategory';
import { trpc } from '@/utils/trpc';

function CategoriesTags() {
  const categories = trpc.useQuery(['getCategories'], {
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const tags = trpc.useQuery(['getTags'], {
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const updateCategoryMutation = trpc.useMutation(['updateCategory']);
  const updateSubCategoryMutation = trpc.useMutation(['updateSubCategory']);

  const utils = trpc.useContext();

  const dispatch = useDispatch();
  const [dataToDisplay, setDataToDisplay] = useState<IMainItem[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalOpen2, setModalOpen2] = useState<boolean>(false);
  const [modalOpen3, setModalOpen3] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>('');
  const [categoryId, setCategoryId] = useState<string>('');

  useEffect(() => {
    if (categories.data !== undefined && !categories.isLoading) {
      let finalDataObjt: Array<IMainItem> = [];

      categories.data.forEach((category) => {
        let mainItemStruct: IMainItem = {
          name: category.name,
          id: category.id,
          editable: true,
          editableHandler: updateCategoryHandler,
          secondaryItems: [],
          handlePrimaryCreation: handlePrimaryCreation,
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
      dispatch(loadCategories(categories.data));
    }
  }, [categories.data, categories.isLoading]);

  useEffect(() => {
    if (updateCategoryMutation.isSuccess) {
      utils.refetchQueries(['getCategories']);
    }
  }, [updateCategoryMutation.isSuccess]);

  useEffect(() => {
    if (updateSubCategoryMutation.isSuccess) {
      utils.refetchQueries(['getCategories']);
    }
  }, [updateSubCategoryMutation.isSuccess]);

  const updateCategoryHandler = (id: string, name: string) => {
    updateCategoryMutation.mutate({ id: id, name: name });
  };

  const editableHandler = (id: string, name: string) => {
    updateSubCategoryMutation.mutate({ id: id, name: name });
  };

  const handlePrimaryCreation = (id: string, name: string) => {
    setCategoryName(name);
    setCategoryId(id);
    setModalOpen3(true);
  };

  return (
    <SettingsPageLayout>
      <CreateTag isOpen={modalOpen} openModal={setModalOpen} />
      <CreateCategory isOpen={modalOpen2} openModal={setModalOpen2} />
      <CreateSubCategory isOpen={modalOpen3} openModal={setModalOpen3} categoryName={categoryName} categoryId={categoryId} />
      <TitleSection>
        <TextIcon icon={faTag} fontSize='20px' color='#333' text='Tags' />
        <Button onClick={() => setModalOpen(!modalOpen)} title='Tag' leftIcon={faPlus} />
      </TitleSection>
      <LinearContainer>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {tags.isLoading ? (
            <div>Loading...</div>
          ) : (
            tags.data?.map((tag) => {
              return <Tag key={tag.id} tagName={tag.name} />;
            })
          )}
        </div>
      </LinearContainer>
      <TitleSection>
        <TextIcon icon={faRectangleList} fontSize='20px' color='#333' text='Categories' />
        <Button onClick={() => setModalOpen2(!modalOpen2)} title='Category' leftIcon={faPlus} />
      </TitleSection>
      {dataToDisplay !== undefined && dataToDisplay?.length > 0 && categories.isLoading ? (
        <div>Loading...</div>
      ) : (
        <Tree data={dataToDisplay}></Tree>
      )}
    </SettingsPageLayout>
  );
}

export default CategoriesTags;
