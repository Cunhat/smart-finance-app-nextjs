import React, { useReducer } from 'react';
import { BasicTextInput } from '../Inputs/BasicTextInput';
import { Modal } from '../Modal';
import { Button } from '../Buttons';
import { Text } from '../Typography';
import { trpc } from '@/utils/trpc';
import { CalendarInput } from '@/components/Inputs/Calendar';
import { SelectInput } from '@/components/Inputs/Select';
import moment from 'moment';

type CreateTransactionProps = {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const Item: React.FC = (props) => {
  return <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '5px' }}>{props.children}</div>;
};

let initialState = {
  tagName: 'Teste',
  value: 0,
  date: undefined,
  description: '',
};

type ACTIONTYPE =
  | { type: 'setDescription'; payload: string }
  | { type: 'setDate'; payload: Date }
  | { type: 'setValue'; payload: number }
  | { type: 'setTag'; payload: string }
  | { type: 'setCategory'; payload: string }
  | { type: 'clear' };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case 'setDescription':
      return { ...state, description: action.payload };
    case 'setDate':
      return { ...state, date: action.payload.toString() };
    case 'setValue':
      return { ...state, value: action.payload };
    case 'setTag':
      return { ...state, tagName: action.payload };
    case 'setCategory':
      return { ...state, category: action.payload };
    case 'clear':
      return initialState;
    default:
      throw new Error();
  }
}

export const CreateTransaction: React.FC<CreateTransactionProps> = (props) => {
  const createTag = trpc.useMutation(['createTag']);
  const utils = trpc.useContext();
  let [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(type: string, e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: type, payload: type === 'setTag' ? e : e.target.value });
  }

  function cancelAndCloseModal() {
    dispatch({ type: 'clear' });
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
      <Text text='Create new Transaction' />
      <div
        style={{ width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '15px' }}
      >
        <Item>
          <Text text='Date' fontSize='16px' />
          <CalendarInput dateFormat={'dd/mm/yy'} value={state.date} onChange={(e) => handleChange('setDate', e)} />
        </Item>
        <Item>
          <Text text='Description' fontSize='16px' />
          <BasicTextInput
            value={state.description}
            placeholder='Description...'
            height='40px'
            onChange={(e) => handleChange('setDescription', e)}
          />
        </Item>
        <Item>
          <Text text='Category' fontSize='16px' />
          <BasicTextInput value={state.category} placeholder='Category...' height='40px' onChange={(e) => handleChange('setCategory', e)} />
        </Item>
        <Item>
          <Text text='Tag' fontSize='16px' />
          <SelectInput data={['Teste', 'Teste 2']} defaultValue={state.tagName} onValueChange={(e) => handleChange('setTag', e)} />
        </Item>
        <Item>
          <Text text='Value' fontSize='16px' />
          <BasicTextInput value={state.value} placeholder='Value...' height='40px' onChange={(e) => handleChange('setValue', e)} />
        </Item>
      </div>

      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <Button secondaryAction onClick={() => cancelAndCloseModal()} title='Cancel' color='red' />
        <Button disabled={[].length === 0} onClick={() => createTag.mutate({ name: 'tagName' })} title='Confirm' />
      </div>
    </Modal>
  );
};
