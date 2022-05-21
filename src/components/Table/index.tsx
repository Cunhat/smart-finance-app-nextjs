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
import { ITableHeader, ITableData, ITableRowItem, ITableDataItem } from '../../models/Interfaces';
import moment from 'moment';
import { Tags, Category } from '../../utils/mock';

type ExpandableItemsProps = {
  open: boolean;
  title: string;
};

type TableProps = {
  header: ITableHeader;
  tableData: ITableData;
};

type TableRowItemProps = {
  data: ITableRowItem;
};

type TableItemProps = {
  data: ITableDataItem;
};

function ExpandableItems(props: ExpandableItemsProps) {
  return (
    <>
      <TableCell colSpan={6} style={{ padding: '0px' }}>
        <TableExpandableItem>
          <p>{props.title}</p>
          {props.open ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}
        </TableExpandableItem>
      </TableCell>
    </>
  );
}

function TableItem(props: TableItemProps) {
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

const TableRowItem = (props: TableRowItemProps) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <TableRow onClick={() => setOpen(!open)}>
        <ExpandableItems title={props.data.expandableTitle} open={open} />
      </TableRow>

      {open && (
        <>
          {props.data.data.map((item, index) => {
            return <TableItem data={item} key={item.date + index} />;
          })}
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
          {tableData.map(item => {
            return <TableRowItem key={item.expandableTitle} data={item} />;
          })}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}
