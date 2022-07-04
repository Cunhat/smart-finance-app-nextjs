import React from 'react';
import { BasicTextInput } from '../Inputs/BasicTextInput';
import { Modal } from '../Modal';
import { Button } from '../Buttons';
import { Text } from '../Typography';
import { trpc } from '@/utils/trpc';

type CreateSubCategoryProps = {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  categoryId: string;
  categoryName: string;
};

export const CreateSubCategory: React.FC<CreateSubCategoryProps> = (props) => {
  const [subCategoryName, setSubCategoryName] = React.useState<string>('');
  const createSubCategory = trpc.useMutation(['createSubCategory']);
  const utils = trpc.useContext();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSubCategoryName(e.target.value);
  }

  function cancelAndCloseModal() {
    setSubCategoryName('');
    props.openModal(false);
  }

  React.useEffect(() => {
    if (createSubCategory.isSuccess) {
      cancelAndCloseModal();
      utils.refetchQueries(['getCategories']);
    }
  }, [createSubCategory.isSuccess]);

  return (
    <Modal id='tags' open={props.isOpen}>
      <Text text={`Create a new Sub Category for ${props.categoryName}`} />
      <div style={{ height: '100px', width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <BasicTextInput value={subCategoryName} placeholder='New Sub Category name...' height='40px' onChange={handleChange} />
      </div>

      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <Button secondaryAction onClick={() => cancelAndCloseModal()} title='Cancel' color='red' />
        <Button
          disabled={subCategoryName.length === 0}
          onClick={() => createSubCategory.mutate({ name: subCategoryName, id_category: props.categoryId })}
          title='Confirm'
        />
      </div>
    </Modal>
  );
};
