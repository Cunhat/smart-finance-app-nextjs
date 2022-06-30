import React from 'react';
import { BasicTextInput } from '../Inputs/BasicTextInput';
import { Modal } from '../Modal';
import { Button } from '../Buttons';
import { Text } from '../Typography';
import { useMutation } from '@apollo/client';
import { createSubCategory, getAllCategories } from '../../api/queries';

type CreateSubCategoryProps = {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  categoryId: string;
  categoryName: string;
};

export const CreateSubCategory: React.FC<CreateSubCategoryProps> = (props) => {
  const [subCategoryName, setSubCategoryName] = React.useState<string>('');
  const [createNewSubCategory, { data, loading, error }] = useMutation(createSubCategory, {
    variables: {
      name: subCategoryName,
      categoryId: props.categoryId,
    },
    refetchQueries: [getAllCategories],
    onCompleted({ createNewSubCategory }) {
      cancelAndCloseModal();
    },
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSubCategoryName(e.target.value);
  }

  function cancelAndCloseModal() {
    setSubCategoryName('');
    props.openModal(false);
  }

  return (
    <Modal id='tags' open={props.isOpen}>
      <Text text={`Create a new Sub Category for ${props.categoryName}`} />
      <div style={{ height: '100px', width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <BasicTextInput value={subCategoryName} placeholder='New Sub Category name...' height='40px' onChange={handleChange} />
      </div>

      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <Button onClick={() => cancelAndCloseModal()} title='Cancel' color='red' />
        <Button disabled={subCategoryName.length === 0} onClick={createNewSubCategory} title='Confirm' />
      </div>
    </Modal>
  );
};
