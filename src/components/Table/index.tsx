import React, { useState } from 'react';
import { Table as MuiTable } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faPen, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { TableExpandableItem, EditActions } from './sytles';
import { withStyles } from '@material-ui/core/styles';
import { BasicTextInput } from '../Inputs/BasicTextInput';
import { SelectInput } from '../Inputs/Select';
import { CalendarInput } from '../Inputs/Calendar';
import { ITableHeader, ITableData, ITableRowItem } from '../../models/Interfaces';
import moment from 'moment';

type ExpandableItemsProps = {
  open: boolean;
};

type TableProps = {
  header: ITableHeader;
  tableData: ITableData;
};

function ExpandableItems(props: ExpandableItemsProps) {
  return (
    <>
      <TableCell colSpan={6} style={{ padding: '0px' }}>
        <TableExpandableItem>
          <p>June 2022</p>
          {props.open ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}
        </TableExpandableItem>
      </TableCell>
    </>
  );
}

function TableItem() {
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
            <StyledTableCell>11/06/1992</StyledTableCell>
            <StyledTableCell>Volvo</StyledTableCell>
            <StyledTableCell>Carro</StyledTableCell>
            <StyledTableCell>FixExpenses</StyledTableCell>
            <StyledTableCell>Volvo</StyledTableCell>
            <StyledTableCell>
              <FontAwesomeIcon icon={faPen} style={{ width: '15px', height: '15px' }} onClick={handleEdit} />
            </StyledTableCell>
          </>
        ) : (
          <>
            <StyledTableCell>
              <CalendarInput dateFormat='dd/mm/yy' value={new Date()} onChange={() => {}}></CalendarInput>
            </StyledTableCell>
            <StyledTableCell>
              <BasicTextInput />
            </StyledTableCell>
            <StyledTableCell>
              <SelectInput></SelectInput>
            </StyledTableCell>
            <StyledTableCell>
              <SelectInput></SelectInput>
            </StyledTableCell>
            <StyledTableCell>
              <BasicTextInput />
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

const TableRowItem = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow onClick={() => setOpen(!open)}>
        <ExpandableItems open={open} />
      </TableRow>

      {open && (
        <>
          <TableItem />
          <TableItem />
          <TableItem />
        </>
      )}
    </>
  );
};

const StyledTable = withStyles(theme => ({
  root: {},
}))(MuiTable);

const StyledTableCell = withStyles(theme => ({
  root: {
    fontFamily: 'Smart Finance Bold',
    fontSize: '18px',
  },
}))(TableCell);

// [
//   {
//     expandableTitle: 'June',
//     data: [
//       {
//         date: '',
//         description: '',
//         category: '',
//         tags: '',
//       },
//     ],
//   },
// ];

export function Table(props: TableProps) {
  React.useEffect(() => {
    if (props.tableData) {
      formatData(props.tableData);
    }
  }, [props.tableData]);

  function formatData(data: ITableData) {
    let finalObject: Array<ITableRowItem> = [];
    let currentDate = moment();

    data.forEach(item => {
      let itemMonth = moment(item.date).format('MMMM');
      let objKey = finalObject.find(elem => elem.expandableTitle === itemMonth);

      if (objKey === undefined) {
        finalObject.push({
          expandableTitle: itemMonth,
          data: [item],
        });
      } else {
        finalObject.find(element => element.expandableTitle === itemMonth)?.data.push(item);
      }
    });
    console.log(finalObject);
  }

  console.log(props);
  return (
    <TableContainer component={Paper}>
      <StyledTable aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            {props.header.map(item => {
              return <StyledTableCell key={item.title}>{item.title}</StyledTableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRowItem></TableRowItem>
          <TableRowItem></TableRowItem>
          <TableRowItem></TableRowItem>
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}
