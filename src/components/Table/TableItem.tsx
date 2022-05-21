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
import { Tags, Category } from '../../utils/mock';
import moment from 'moment';
import { EditActions } from './sytles';

type TableItemProps = {
  data: ITableDataItem;
};

export function TableItem(props: TableItemProps) {
  const [edit, setEdit] = useState(false);

  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:hover': {
        background: '#f9f9f9',
        cursor: 'pointer',
      },
    },
  }))(TableRow);

  const StyledTableCell = withStyles(theme => ({
    root: {
      fontFamily: 'Smart Finance Regular',
      fontSize: '14px',
    },
  }))(TableCell);

  function handleEdit() {
    setEdit(!edit);
  }

  return (
    <>
      <StyledTableRow>
        {!edit ? (
          <>
            <StyledTableCell>{moment(props.data.date).format('DD/MM/YYYY')}</StyledTableCell>
            <StyledTableCell>{props.data.description}</StyledTableCell>
            <StyledTableCell>{props.data.category}</StyledTableCell>
            <StyledTableCell>{props.data.tags}</StyledTableCell>
            <StyledTableCell>{props.data.value}</StyledTableCell>
            <StyledTableCell>
              <FontAwesomeIcon icon={faPen} style={{ width: '15px', height: '15px' }} onClick={handleEdit} />
            </StyledTableCell>
          </>
        ) : (
          <>
            <StyledTableCell>
              <CalendarInput dateFormat='dd/mm/yy' date={moment(props.data.date).toDate()} />
            </StyledTableCell>
            <StyledTableCell>
              <BasicTextInput value={props.data.description} />
            </StyledTableCell>
            <StyledTableCell>
              <SelectInput data={Category} defaultValue={props.data.category} />
            </StyledTableCell>
            <StyledTableCell>
              <SelectInput data={Tags} defaultValue={props.data.tags} />
            </StyledTableCell>
            <StyledTableCell>
              <BasicTextInput value={props.data.value.toString()} />
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
