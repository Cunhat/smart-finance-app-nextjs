import React, { useState } from 'react';
import { ITableDataItem } from '../../models/TableInterfaces/interfaces';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { BasicTextInput } from '../Inputs/BasicTextInput';
import { SelectInput } from '../Inputs/Select';
import { CalendarInput } from '../Inputs/Calendar';
import moment from 'moment';
import { EditActions } from './sytles';
import { useSelector } from 'react-redux';
import { CurrencyInput } from '@/components/Inputs/CurrencyInput';

type TableItemProps = {
  data: ITableDataItem;
};

export function TableItem(props: TableItemProps) {
  const [edit, setEdit] = useState(false);
  const { categories, tags } = useSelector((state: RootState) => state.generalInfo);

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

  const getSelectedSubCategory = () => {
    return categories
      .find((c) => c.id === props.data.subcategory.id_category)
      .subCategories.find((c) => c.id === props.data.subcategory.id);
  };

  return (
    <>
      <StyledTableRow>
        {!edit ? (
          <>
            <StyledTableCell>{moment(props.data.date).format('DD/MM/YYYY')}</StyledTableCell>
            <StyledTableCell>{props.data.description}</StyledTableCell>
            <StyledTableCell>{props.data.subcategory.name}</StyledTableCell>
            <StyledTableCell>{props.data.tag.name}</StyledTableCell>
            <StyledTableCell>{parseInt(props.data.value).toFixed(2) + '€'}</StyledTableCell>
            <StyledTableCell>
              <FontAwesomeIcon icon={faPen} style={{ width: '15px', height: '15px' }} onClick={handleEdit} />
            </StyledTableCell>
          </>
        ) : (
          <>
            <StyledTableCell>
              <CalendarInput
                dateFormat={'dd/mm/yy'}
                date={new Date(props.data.date)}
                //onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('setDate', e)}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </StyledTableCell>
            <StyledTableCell>
              <BasicTextInput
                value={props.data.description}
                height='40px'
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('setDescription', e)}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </StyledTableCell>
            <StyledTableCell>
              <SelectInput
                data={categories}
                defaultValue={getSelectedSubCategory()}
                onValueChange={(e) => {}}
                height='40px'
                optionLabel='name'
                optionGroupLabel='name'
                optionGroupChildren='subCategories'
              />
            </StyledTableCell>
            <StyledTableCell>
              <SelectInput
                data={tags}
                defaultValue={props.data.tag}
                onValueChange={(e) => {}}
                placeholder='Select a tag'
                height='40px'
                optionLabel='name'
              />
            </StyledTableCell>
            <StyledTableCell>
              <CurrencyInput value={props.data.value} height='40px' onChange={(e) => {}} />
            </StyledTableCell>
            <StyledTableCell>
              <EditActions>
                <FontAwesomeIcon icon={faCheck} style={{ width: '20px', height: '20px', color: 'green' }} onClick={handleEdit} />
                <FontAwesomeIcon icon={faXmark} style={{ width: '20px', height: '20px', color: 'red' }} onClick={handleEdit} />
              </EditActions>
            </StyledTableCell>
          </>
        )}
      </StyledTableRow>
    </>
  );
}
