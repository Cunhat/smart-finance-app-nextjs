import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { PageLayout } from '../../components/PageLayout';
import { SettingsPageLayout } from '../../components/SettingsPageLayout';
import { useSelector, useDispatch } from 'react-redux';
import { loadCategories } from '../../redux/slices/categoriesSlice';
import { useQuery } from '@apollo/client';
import { getAllCategories, getTags } from '../../api/queries';
import { IGetAllCategoriesRequest, IGetAllTagsRequest } from '../../models/Interfaces';
import { Tree } from '../../components/Tree';
import { TextIcon } from '../../components/Typography';
import { IMainItem, ISecondaryItem } from '../../models/TreeInterfaces/interfaces';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-regular-svg-icons';
import { Tag } from '../../components/Tag';
import { LinearContainer } from '../../components/Containers';
import { Modal } from '../../components/Modal';

function CategoriesTags() {
  const categories = useQuery<IGetAllCategoriesRequest>(getAllCategories);
  const tags = useQuery<IGetAllTagsRequest>(getTags);
  const dispatch = useDispatch();
  const [dataToDisplay, setDataToDisplay] = useState<IMainItem[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalOpen2, setModalOpen2] = useState<boolean>(false);

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

  //const categories = useSelector((state) => state.categories);

  const editableHandler = (id: string, name: string) => {
    console.log(id, name);
  };

  return (
    <SettingsPageLayout>
      <button onClick={() => setModalOpen(!modalOpen)}>Edit</button>
      <button onClick={() => setModalOpen2(!modalOpen2)}>Edit</button>
      <Modal id='tags' open={modalOpen} onClose={() => setModalOpen(!modalOpen)}>
        Teste
      </Modal>
      <Modal
        id='tags'
        open={modalOpen2}
        onClose={() => {
          setModalOpen2(!modalOpen2);
          
        }}
      >
        Teste uheuhueuheueuheu
      </Modal>

      <TextIcon icon={faTag} fontSize='20px' color='#333' text='Tags' />
      <LinearContainer>
        {tags.data?.getTags.map((tag) => {
          return <Tag key={tag.id} tagName={tag.name} />;
        })}
      </LinearContainer>

      <TextIcon icon={faRectangleList} fontSize='20px' color='#333' text='Categories' />
      {dataToDisplay !== undefined && dataToDisplay?.length > 0 && categories.loading ? (
        <div>Loading...</div>
      ) : (
        <Tree data={dataToDisplay}></Tree>
      )}
    </SettingsPageLayout>
  );
}

export default CategoriesTags;
