import React from 'react';
import { BasicTextInput } from '../Inputs/BasicTextInput';
import { Modal } from '../Modal';
import { Button } from '../Buttons';
import { Text } from '../Typography';
import { useMutation } from '@apollo/client';
import { createNewCategory, getAllCategories } from '../../api/queries';

type CreateCategoryProps = {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

export const CreateCategory: React.FC<CreateCategoryProps> = (props) => {
  const [categoryName, setCategoryName] = React.useState<string>('');
  const [createCategory, { data, loading, error }] = useMutation(createNewCategory, {
    variables: {
      name: categoryName,
    },
    refetchQueries: [getAllCategories],
    onCompleted({ createCategory }) {
      if (createCategory) {
        cancelAndCloseModal();
      }
    },
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCategoryName(e.target.value);
  }

  function cancelAndCloseModal() {
    setCategoryName('');
    props.openModal(false);
  }

  return (
    <Modal id='tags' open={props.isOpen}>
      <Text text='Create new Category' />
      <div style={{ height: '100px', width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <BasicTextInput value={categoryName} placeholder='New Category name...' height='40px' onChange={handleChange} />
      </div>

      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <Button onClick={() => cancelAndCloseModal()} title='Cancel' color='red' />
        <Button disabled={categoryName.length === 0} onClick={createCategory} title='Confirm' />
      </div>
    </Modal>
  );
};
