import React from 'react';
import { BasicTextInput } from '../Inputs/BasicTextInput';
import { Modal } from '../Modal';
import { Button } from '../Buttons';
import { Text } from '../Typography';
import { trpc } from '@/utils/trpc';

type CreateCategoryProps = {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

export const CreateCategory: React.FC<CreateCategoryProps> = (props) => {
  const [categoryName, setCategoryName] = React.useState<string>('');
  const createCategory = trpc.useMutation(['createCategory']);
  const utils = trpc.useContext();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCategoryName(e.target.value);
  }

  function cancelAndCloseModal() {
    setCategoryName('');
    props.openModal(false);
  }

  React.useEffect(() => {
    if (createCategory.isSuccess) {
      cancelAndCloseModal();
      utils.refetchQueries(['getCategories']);
    }
  }, [createCategory.isSuccess]);

  return (
    <Modal id='tags' open={props.isOpen}>
      <Text text='Create new Category' />
      <div style={{ height: '100px', width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <BasicTextInput value={categoryName} placeholder='New Category name...' height='40px' onChange={handleChange} />
      </div>

      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <Button secondaryAction onClick={() => cancelAndCloseModal()} title='Cancel' color='red' />
        <Button disabled={categoryName.length === 0} onClick={() => createCategory.mutate({ name: categoryName })} title='Confirm' />
      </div>
    </Modal>
  );
};
