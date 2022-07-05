import React from 'react';
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

export const CreateTransaction: React.FC<CreateTransactionProps> = (props) => {
  const [tagName, setTagName] = React.useState<string>('');
  const [date, setDate] = React.useState<Date | undefined>(undefined);
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
      <Text text='Create new Transaction' />
      <div
        style={{ width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '15px' }}
      >
        <Item>
          <Text text='Date' fontSize='16px' />
          <CalendarInput dateFormat={'dd/mm/yy'} value={date} onChange={setDate} />
        </Item>
        <Item>
          <Text text='Description' fontSize='16px' />
          <BasicTextInput value={tagName} placeholder='Description...' height='40px' onChange={handleChange} />
        </Item>
        <Item>
          <Text text='Category' fontSize='16px' />
          <BasicTextInput value={tagName} placeholder='Category...' height='40px' onChange={handleChange} />
        </Item>
        <Item>
          <Text text='Tag' fontSize='16px' />
          <SelectInput  data={["Teste", "Teste 2"]} defaultValue="Teste" />
        </Item>
        <Item>
          <Text text='Value' fontSize='16px' />
          <BasicTextInput value={tagName} placeholder='Value...' height='40px' onChange={handleChange} />
        </Item>
      </div>

      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <Button secondaryAction onClick={() => cancelAndCloseModal()} title='Cancel' color='red' />
        <Button disabled={tagName.length === 0} onClick={() => createTag.mutate({ name: tagName })} title='Confirm' />
      </div>
    </Modal>
  );
};
