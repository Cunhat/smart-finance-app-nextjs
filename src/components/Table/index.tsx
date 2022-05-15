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
import {CalendarInput } from '../Inputs/Calendar';

type ExpandableItemsProps = {
  open: boolean;
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
              <CalendarInput dateFormat='dd/mm/yy' value={new Date()} onChange={()=> {}}></CalendarInput>
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

const Teste = () => {
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

export function Table() {
  return (
    <TableContainer component={Paper}>
      <StyledTable aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell>Tags</StyledTableCell>
            <StyledTableCell>Amount</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Teste></Teste>
          <Teste></Teste>
          <Teste></Teste>
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}
