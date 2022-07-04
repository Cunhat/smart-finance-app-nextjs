import React, { useState } from 'react';
import { Table as MuiTable } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { ITableHeader, ITableRowItem } from '../../models/TableInterfaces/interfaces';

import { TableRowItem } from './TableRowItem';

type TableProps = {
  header: ITableHeader;
  tableData: Array<ITableRowItem>;
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

export function Table(props: TableProps) {
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
          {props.tableData.map(item => {
            return <TableRowItem key={item.expandableTitle} data={item} />;
          })}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}
