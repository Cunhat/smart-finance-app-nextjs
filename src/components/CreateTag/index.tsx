import React from 'react';
import { BasicTextInput } from '../Inputs/BasicTextInput';
import { Modal } from '../Modal';
import { Button } from '../Buttons';
import { Text } from '../Typography';
import { useMutation } from '@apollo/client';
import { createNewTag, getTags } from '../../api//queries';

type CreateTagProps = {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

export const CreateTag: React.FC<CreateTagProps> = (props) => {
  const [tagName, setTagName] = React.useState<string>('');
  const [createTag, { data, loading, error }] = useMutation(createNewTag, {
    variables: {
      name: tagName,
    },
    refetchQueries: [getTags],
    onCompleted({ createTag }) {
      if (createTag) {
        cancelAndCloseModal();
      }
    },
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTagName(e.target.value);
  }

  function cancelAndCloseModal() {
    setTagName('');
    props.openModal(false);
  }

  return (
    <Modal id='tags' open={props.isOpen}>
      <Text text='Create a new Tag' />
      <div style={{ height: '100px', width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <BasicTextInput value={tagName} placeholder='New Tag name...' height='40px' onChange={handleChange} />
      </div>

      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <Button onClick={() => cancelAndCloseModal()} title='Cancel' color='red' />
        <Button disabled={tagName.length === 0} onClick={createTag} title='Confirm' />
      </div>
    </Modal>
  );
};
