import React from 'react';
import { BasicTextInput } from '../Inputs/BasicTextInput';
import { Modal } from '../Modal';
import { Button } from '../Buttons';
import { Text } from '../Typography';
import { trpc } from '@/utils/trpc';
import { CalendarInput } from '@/components/Inputs/Calendar';
import { SelectInput } from '@/components/Inputs/Select';
import { useSelector } from 'react-redux';
import { CurrencyInput } from '@/components/Inputs/CurrencyInput';
import { useTransaction } from '@/hooks/useTransaction';

type CreateTransactionProps = {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

type DropdownCategories = { label: string; values: Array<string> };

const Item: React.FC = (props) => {
  return <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '5px' }}>{props.children}</div>;
};

export const CreateTransaction: React.FC<CreateTransactionProps> = (props) => {
  const createTransaction = trpc.useMutation(['createTransaction']);
  const utils = trpc.useContext();
  let [state, handleChange, clearState] = useTransaction(undefined);
  const { categories, tags, accounts } = useSelector((state: RootState) => state.generalInfo);

  React.useEffect(() => {
    if (createTransaction.isSuccess) {
      cancelAndCloseModal();
      utils.refetchQueries(['getTransactions']);
    }
  }, [createTransaction.isSuccess]);

  const cancelAndCloseModal = () => {
    clearState();
    props.openModal(false);
  };

  const handleSaveTransaction = (): void => {
    let transaction: any = {};
    transaction.description = state.description;
    transaction.value = parseInt(state.value!);
    transaction.date = state.date.toDateString();
    transaction.id_account = 'd7222618-c011-42c7-9343-7abef26f33df';
    transaction.id_user = 'user';
    transaction.id_subCategory = state.category.id;
    transaction.id_tag = state.tagName.id;
    transaction.id_account = state.account.id;

    createTransaction.mutate(transaction);
    cancelAndCloseModal();
  };

  const checkIfCanMutate = (): boolean => {
    return !(
      state.description.length > 0 &&
      state.value !== undefined &&
      state.date !== undefined &&
      state.category !== undefined &&
      state.tagName !== undefined &&
      state.account !== undefined
    );
  };

  return (
    <Modal id='createTransaction' open={props.isOpen}>
      <Text text='Create new Transaction' />
      <div
        style={{ width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '15px' }}
      >
        <Item>
          <Text text='Account' fontSize='16px' />
          <SelectInput
            data={accounts}
            defaultValue={state.account}
            onValueChange={(e) => handleChange('setAccount', e)}
            height='40px'
            placeholder='Select a account'
            optionLabel='name'
          />
        </Item>
        <Item>
          <Text text='Date' fontSize='16px' />
          <CalendarInput
            dateFormat={'dd/mm/yy'}
            date={state.date}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('setDate', e)}
          />
        </Item>
        <Item>
          <Text text='Description' fontSize='16px' />
          <BasicTextInput
            value={state.description}
            placeholder='Description...'
            height='40px'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('setDescription', e)}
          />
        </Item>
        <Item>
          <Text text='Category' fontSize='16px' />
          <SelectInput
            data={categories}
            defaultValue={state.category}
            onValueChange={(e) => handleChange('setCategory', e)}
            height='40px'
            placeholder='Select a category'
            optionLabel='name'
            optionGroupLabel='name'
            optionGroupChildren='subCategories'
          />
        </Item>
        <Item>
          <Text text='Tag' fontSize='16px' />
          <SelectInput
            data={tags}
            defaultValue={state.tagName}
            onValueChange={(e) => handleChange('setTagName', e)}
            placeholder='Select a tag'
            height='40px'
            optionLabel='name'
          />
        </Item>
        <Item>
          <Text text='Value' fontSize='16px' />
          <CurrencyInput value={state.value} placeholder='Value...' height='40px' onChange={(e) => handleChange('setValue', e)} />
        </Item>
      </div>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <Button secondaryAction onClick={() => cancelAndCloseModal()} title='Cancel' color='red' />
        <Button disabled={checkIfCanMutate()} onClick={handleSaveTransaction} title='Confirm' />
      </div>
    </Modal>
  );
};
