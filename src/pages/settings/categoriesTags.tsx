import React, { useState, useEffect } from 'react';
import { SettingsPageLayout } from '../../components/SettingsPageLayout';
import { useDispatch } from 'react-redux';
import { loadCategories } from '../../redux/slices/categoriesSlice';
import { useQuery } from '@apollo/client';
import { getAllCategories, getTags } from '../../api/queries';
import { IGetAllCategoriesRequest, IGetAllTagsRequest } from '../../models/Interfaces';
import { Tree } from '../../components/Tree';
import { TextIcon, Text } from '../../components/Typography';
import { IMainItem, ISecondaryItem } from '../../models/TreeInterfaces/interfaces';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-regular-svg-icons';
import { Tag } from '../../components/Tag';
import { LinearContainer } from '../../components/Containers';
import { Modal } from '../../components/Modal';
import { Button } from '../../components/Buttons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TitleSection } from '../../styles/Settings';
import { CreateTag } from '../../components/CreateTag';
import { CreateCategory } from '../../components/CreateCategory';
import { CreateSubCategory } from '../../components/CreateSubCategory';

function CategoriesTags() {
  const categories = useQuery<IGetAllCategoriesRequest>(getAllCategories, { notifyOnNetworkStatusChange: true });
  const tags = useQuery<IGetAllTagsRequest>(getTags, { notifyOnNetworkStatusChange: true });
  const dispatch = useDispatch();
  const [dataToDisplay, setDataToDisplay] = useState<IMainItem[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalOpen2, setModalOpen2] = useState<boolean>(false);
  const [modalOpen3, setModalOpen3] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>('');
  const [categoryId, setCategoryId] = useState<string>('');

  useEffect(() => {
    if (categories.data !== undefined && !categories.loading) {
      let finalDataObjt: Array<IMainItem> = [];

      categories.data.allCategories.forEach((category) => {
        let mainItemStruct: IMainItem = {
          name: category.name,
          id: category.id,
          editable: true,
          editableHandler: editableHandler,
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
      dispatch(loadCategories(categories.data.allCategories));
    }
  }, [categories.data, categories.loading]);

  const editableHandler = (id: string,) => {
    console.log(id);
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
        {categories.loading ? (
          <div>Loading...</div>
        ) : (
          tags.data?.getTags.map((tag) => {
            return <Tag key={tag.id} tagName={tag.name} />;
          })
        )}
      </LinearContainer>
      <TitleSection>
        <TextIcon icon={faRectangleList} fontSize='20px' color='#333' text='Categories' />
        <Button onClick={() => setModalOpen2(!modalOpen2)} title='Category' leftIcon={faPlus} />
      </TitleSection>
      {dataToDisplay !== undefined && dataToDisplay?.length > 0 && categories.loading ? (
        <div>Loading...</div>
      ) : (
        <Tree data={dataToDisplay}></Tree>
      )}
    </SettingsPageLayout>
  );
}

export default CategoriesTags;
