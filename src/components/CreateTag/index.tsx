import React from 'react';
import { BasicTextInput } from '../Inputs/BasicTextInput';
import { Modal } from '../Modal';
import { Button } from '../Buttons';
import { Text } from '../Typography';
import { trpc } from '@/utils/trpc';

type CreateTagProps = {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

export const CreateTag: React.FC<CreateTagProps> = (props) => {
  const [tagName, setTagName] = React.useState<string>('');
  const createTag = trpc.useMutation(['createTag']);
  const utils = trpc.useContext();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTagName(e.target.value);
  }

  function cancelAndCloseModal() {
    setTagName('');
    props.openModal(false);
  }

  React.useEffect(() => {
    if (createTag.isSuccess) {
      cancelAndCloseModal();
      utils.refetchQueries(['getTags']);
    }
  }, [createTag.isSuccess]);

  return (
    <Modal id='tags' open={props.isOpen}>
      <Text text='Create a new Tag' />
      <div style={{ height: '100px', width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <BasicTextInput value={tagName} placeholder='New Tag name...' height='40px' onChange={handleChange} />
      </div>

      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <Button secondaryAction onClick={() => cancelAndCloseModal()} title='Cancel' color='red' />
        <Button disabled={tagName.length === 0} onClick={() => createTag.mutate({ name: tagName })} title='Confirm' />
      </div>
    </Modal>
  );
};
