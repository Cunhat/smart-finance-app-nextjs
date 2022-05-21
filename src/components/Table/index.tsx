import React, { useState } from 'react';
import { Table as MuiTable } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { ITableHeader, ITableData, ITableRowItem } from '../../models/TableInterfaces/interfaces';
import moment from 'moment';
import { TableRowItem } from './TableRowItem';

type TableProps = {
  header: ITableHeader;
  tableData: ITableData;
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
  const [tableData, setTableData] = React.useState<Array<ITableRowItem>>([]);
  React.useEffect(() => {
    if (props.tableData) {
      formatData(props.tableData);
    }
  }, [props.tableData]);

  function formatData(data: ITableData) {
    let finalObject: Array<ITableRowItem> = [];
    let yearObject: Array<ITableRowItem> = [];
    let currentDate = moment();

    data.forEach(item => {
      let itemMonth = moment(item.date).format('MMMM');
      let itemYear = moment(item.date).format('YYYY');
      let objKey = finalObject.find(elem => elem.expandableTitle === itemMonth);
      let currentYear = moment(currentDate).format('YYYY');

      if (objKey === undefined && itemYear === currentYear) {
        finalObject.push({
          expandableTitle: itemMonth,
          data: [item],
        });
      } else if (itemYear === currentYear) {
        finalObject.find(element => element.expandableTitle === itemMonth)?.data.push(item);
      } else {
        let objKeyByYear = yearObject.find(elem => elem.expandableTitle === itemYear);
        if (objKeyByYear === undefined) {
          yearObject.push({
            expandableTitle: itemYear,
            data: [item],
          });
        } else {
          yearObject.find(element => element.expandableTitle === itemYear)?.data.push(item);
        }
      }
    });

    setTableData(sortObject(finalObject, yearObject));
  }

  function sortObject(finalObject: Array<ITableRowItem>, yearObject: Array<ITableRowItem>) {
    finalObject.sort((a, b) => {
      return moment().month(a.expandableTitle).format('M') < moment().month(b.expandableTitle).format('M')
        ? 1
        : moment().month(b.expandableTitle).format('M') < moment().month(a.expandableTitle).format('M')
        ? -1
        : 0;
    });

    yearObject.sort((a, b) => {
      return a.expandableTitle < b.expandableTitle ? 1 : b.expandableTitle < a.expandableTitle ? -1 : 0;
    });

    finalObject = [...finalObject, ...yearObject];

    //Order expenses by recent date
    finalObject.forEach(item => {
      item.data.sort((a, b) => {
        return moment(a.date).format('YYYYMMDD') < moment(b.date).format('YYYYMMDD') ? 1 : -1;
      });
    });

    return finalObject;
  }

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
          {tableData.map(item => {
            return <TableRowItem key={item.expandableTitle} data={item} />;
          })}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}
