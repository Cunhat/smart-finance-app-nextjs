import React, { useState } from 'react';
import { ITableDataItem } from '../../models/TableInterfaces/interfaces';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCheck, faXmark, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { BasicTextInput } from '../Inputs/BasicTextInput';
import { SelectInput } from '../Inputs/Select';
import { CalendarInput } from '../Inputs/Calendar';
import moment from 'moment';
import { EditActions } from './sytles';
import { useSelector } from 'react-redux';
import { CurrencyInput } from '@/components/Inputs/CurrencyInput';
import { useTransaction } from '@/hooks/useTransaction';
import { trpc } from '@/utils/trpc';

type TableItemProps = {
  data: ITableDataItem;
};

export function TableItem(props: TableItemProps) {
  const [edit, setEdit] = useState(false);
  const { categories, tags, accounts } = useSelector((state: RootState) => state.generalInfo);
  const [state, handleChange] = useTransaction({
    value: props.data.value.toString(),
    date: props.data.date,
    description: props.data.description,
    tagName: props.data.tag,
    category: props.data.subcategory,
    account: props.data.account,
  });
  const updateTransactionMutation = trpc.useMutation(['updateTransaction']);
  const deleteTransactionMutation = trpc.useMutation(['deleteTransaction']);
  const utils = trpc.useContext();
  const desc = React.useRef(null);


  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:hover': {
        background: '#f9f9f9',
        cursor: 'pointer',
      },
    },
  }))(TableRow);

  const StyledTableCell = withStyles((theme) => ({
    root: {
      fontFamily: 'Smart Finance Regular',
      fontSize: '14px',
    },
  }))(TableCell);

  function handleEdit() {
    setEdit(!edit);
  }

  React.useEffect(() => {
    if (updateTransactionMutation.isSuccess) {
      utils.refetchQueries(['getTransactions']);
    }
  }, [updateTransactionMutation.isSuccess]);

  React.useEffect(() => {
    if (deleteTransactionMutation.isSuccess) {
      utils.refetchQueries(['getTransactions']);
    }
  }, [deleteTransactionMutation.isSuccess]);

  const updateTransaction = () => {
    let transaction: any = {};
    transaction.id = props.data.id;
    transaction.description = desc.current.value;
    transaction.value = parseInt(state.value!);
    transaction.date = new Date(state.date);
    transaction.id_account = 'd7222618-c011-42c7-9343-7abef26f33df';
    transaction.id_user = 'user';
    transaction.id_subCategory = state.category!.id;
    transaction.id_tag = state.tagName!.id;
    transaction.id_account = state.account!.id;
    updateTransactionMutation.mutate(transaction);
    handleEdit();
  };

  const deleteTransaction = () => {
    deleteTransactionMutation.mutate({ id: props.data.id });
    handleEdit();
  };

  const getSelectedSubCategory = () => {
    return categories.find((c) => c.id === state?.category?.id_category)?.subCategories.find((c) => c.id === state.category.id);
  };

  const checkIfCanMutate = () => {
    return (
      state.description.length > 0 &&
      state.value !== 0 &&
      state.value !== null &&
      state.date !== undefined &&
      state.category !== undefined &&
      state.tagName !== undefined &&
      state.account !== undefined 
    );
  };

  return (
    <>
      <StyledTableRow>
        {!edit ? (
          <>
            <StyledTableCell>{props.data.account.name}</StyledTableCell>
            <StyledTableCell>{moment(props.data.date).format('DD/MM/YYYY')}</StyledTableCell>
            <StyledTableCell>{props.data.description}</StyledTableCell>
            <StyledTableCell>{props?.data?.subcategory?.name ?? 'Sub category not assigned'}</StyledTableCell>
            <StyledTableCell>{props?.data?.tag?.name ?? 'Tag not assigned'}</StyledTableCell>
            <StyledTableCell>{parseInt(props.data.value).toFixed(2) + '€'}</StyledTableCell>
            <StyledTableCell>
              <FontAwesomeIcon icon={faPen} style={{ width: '15px', height: '15px' }} onClick={handleEdit} />
            </StyledTableCell>
          </>
        ) : (
          <>
            <StyledTableCell>
              <SelectInput
                data={accounts}
                defaultValue={state.account}
                onValueChange={(e) => handleChange('setAccount', e)}
                placeholder='Select a account'
                height='40px'
                optionLabel='name'
              />
            </StyledTableCell>
            <StyledTableCell>
              <CalendarInput
                dateFormat={'dd/mm/yy'}
                date={new Date(state.date)}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('setDate', e)}
              />
            </StyledTableCell>
            <StyledTableCell>
              <BasicTextInput
                //value={state.description}
                height='40px'
                error={state.description.length === 0}
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('setDescription', e)}
                ref={desc}
                defaultValue={state.description}
              />
            </StyledTableCell>
            <StyledTableCell>
              <SelectInput
                data={categories}
                defaultValue={getSelectedSubCategory()}
                height='40px'
                optionLabel='name'
                optionGroupLabel='name'
                optionGroupChildren='subCategories'
                onValueChange={(e) => handleChange('setCategory', e)}
              />
            </StyledTableCell>
            <StyledTableCell>
              <SelectInput
                data={tags}
                defaultValue={state.tagName}
                onValueChange={(e) => handleChange('setTagName', e)}
                placeholder='Select a tag'
                height='40px'
                optionLabel='name'
              />
            </StyledTableCell>
            <StyledTableCell>
              <CurrencyInput
                value={state.value}
                height='40px'
                onChange={(e) => handleChange('setValue', e)}
                error={state.value === 0 || state.value === null}
              />
            </StyledTableCell>
            <StyledTableCell>
              <EditActions>
                {checkIfCanMutate() && (
                  <FontAwesomeIcon icon={faCheck} style={{ width: '20px', height: '20px', color: 'green' }} onClick={updateTransaction} />
                )}
                <FontAwesomeIcon icon={faXmark} style={{ width: '20px', height: '20px', color: 'red' }} onClick={handleEdit} />
                <FontAwesomeIcon icon={faTrashCan} style={{ width: '20px', height: '20px', color: '#999' }} onClick={deleteTransaction} />
              </EditActions>
            </StyledTableCell>
          </>
        )}
      </StyledTableRow>
    </>
  );
}
