import React, { useReducer } from 'react';
import { BasicTextInput } from '../Inputs/BasicTextInput';
import { Modal } from '../Modal';
import { Button } from '../Buttons';
import { Text } from '../Typography';
import { trpc } from '@/utils/trpc';
import { CalendarInput } from '@/components/Inputs/Calendar';
import { SelectInput } from '@/components/Inputs/Select';
import { useSelector } from 'react-redux';
import { CurrencyInput } from '@/components/Inputs/CurrencyInput';

type CreateTransactionProps = {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

type DropdownCategories = { label: string; values: Array<string> };

const Item: React.FC = (props) => {
  return <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '5px' }}>{props.children}</div>;
};

let initialState = {
  value: undefined as number | undefined,
  date: new Date(),
  description: '',
  categories: [] as Array<DropdownCategories>,
  tags: [] as Array<string>,
  tagName: null,
  category: null,
};

type ACTIONTYPE =
  | { type: 'setDescription'; payload: string }
  | { type: 'setDate'; payload: Date }
  | { type: 'setValue'; payload: string }
  | { type: 'setTagName'; payload: string }
  | { type: 'setCategory'; payload: string }
  | { type: 'setCategories'; payload: Array<DropdownCategories> }
  | { type: 'setTags'; payload: Array<string> }
  | { type: 'clear' };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case 'setDescription':
      return { ...state, description: action.payload };
    case 'setDate':
      return { ...state, date: action.payload };
    case 'setValue':
      return { ...state, value: action.payload };
    case 'setTagName':
      return { ...state, tagName: action.payload };
    case 'setCategory':
      return { ...state, category: action.payload };
    case 'setCategories':
      return { ...state, categories: action.payload };
    case 'setTags':
      return { ...state, tags: action.payload };
    case 'clear':
      return initialState;
    default:
      throw new Error();
  }
}

export const CreateTransaction: React.FC<CreateTransactionProps> = (props) => {
  const createTransaction = trpc.useMutation(['createTransaction']);
  const utils = trpc.useContext();
  let [state, dispatch] = useReducer(reducer, initialState);
  const { categories, tags } = useSelector((state: RootState) => state.generalInfo);

  React.useEffect(() => {
    if (categories !== undefined) {
      let valueToDrop: Array<DropdownCategories> = [];
      categories.forEach((category) => {
        let aux: DropdownCategories = { label: category.name, values: [] };
        category.subCategories.forEach((subCategory) => {
          aux.values.push(subCategory.name);
        });
        valueToDrop.push(aux);
      });
      dispatch({ type: 'setCategories', payload: valueToDrop });
    }
  }, [categories]);

  React.useEffect(() => {
    if (tags !== undefined) {
      let finalTags: Array<string> = [];
      tags.forEach((tag) => {
        finalTags.push(tag.name);
      });

      dispatch({ type: 'setTags', payload: finalTags });
    }
  }, [tags]);

  React.useEffect(() => {
    if (createTransaction.isSuccess) {
      cancelAndCloseModal();
      utils.refetchQueries(['getTransactions']);
    }
  }, [createTransaction.isSuccess]);

  function handleChange(type: string, e: React.ChangeEvent<HTMLInputElement>): void {
    dispatch({ type: type, payload: e.target.value });
  }

  function cancelAndCloseModal(): void {
    dispatch({ type: 'clear' });
    props.openModal(false);
  }

  const handleSaveTransaction = (): void => {
    let transaction: any = {};
    transaction.description = state.description;
    transaction.value = parseInt(state.value);
    transaction.date = state.date.toDateString();
    transaction.id_account = 'd7222618-c011-42c7-9343-7abef26f33df';
    transaction.id_user = 'user';
    transaction.id_subCategory = state.category.id;
    transaction.id_tag = state.tagName.id;

    createTransaction.mutate(transaction);
    cancelAndCloseModal();
  };

  const checkIfCanMutate = (): boolean => {
    return !(
      state.description.length > 0 &&
      state.value > 0 &&
      state.date !== undefined &&
      state.category !== undefined &&
      state.tagName !== undefined
    );
  };

  return (
    <Modal id='createTransaction' open={props.isOpen}>
      <Text text='Create new Transaction' />
      <div
        style={{ width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '15px' }}
      >
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
