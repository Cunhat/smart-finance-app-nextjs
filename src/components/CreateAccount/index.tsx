import React from 'react';
import { BasicTextInput } from '../Inputs/BasicTextInput';
import { Modal } from '../Modal';
import { Button } from '../Buttons';
import { Text } from '../Typography';
import { trpc } from '@/utils/trpc';

type CreateAccountProps = {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

export const CreateAccount: React.FC<CreateAccountProps> = (props) => {
  const [accountName, setAccountName] = React.useState<string>('');
  const [accountType, setAccountType] = React.useState<string>('');
  const createCategory = trpc.useMutation(['createAccount']);
  const utils = trpc.useContext();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAccountName(e.target.value);
  }

  function handleAccountType(e: React.ChangeEvent<HTMLInputElement>) {
    setAccountType(e.target.value);
  }

  function cancelAndCloseModal() {
    setAccountName('');
    props.openModal(false);
  }

  React.useEffect(() => {
    if (createCategory.isSuccess) {
      cancelAndCloseModal();
      utils.refetchQueries(['getAccounts']);
    }
  }, [createCategory.isSuccess]);

  return (
    <Modal id='tags' open={props.isOpen}>
      <Text text='Create new account' />
      <div
        style={{
          height: "fit-content",
          width: '300px',
          display: 'flex',
          justifyContent: 'center',
         
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <Text text='Account name' fontSize='16px' />
        <BasicTextInput value={accountName} placeholder='New account name...' height='40px' onChange={handleChange} />
        <Text text='Account type' fontSize='16px' />
        <BasicTextInput value={accountType} placeholder='New account type...' height='40px' onChange={handleAccountType} />
      </div>

      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <Button onClick={() => cancelAndCloseModal()} title='Cancel' color='red' />
        <Button
          disabled={accountName.length === 0 || accountType.length === 0}
          onClick={() => createCategory.mutate({ name: accountName, type: accountType })}
          title='Confirm'
        />
      </div>
    </Modal>
  );
};
