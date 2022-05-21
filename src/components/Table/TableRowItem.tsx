import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import {ExpandableItems} from './ExpandableItems';
import { ITableRowItem } from '../../models/TableInterfaces/interfaces';
import { TableItem } from './TableItem';

type TableRowItemProps = {
  data: ITableRowItem;
};

export function TableRowItem(props: TableRowItemProps) {
  const [open, setOpen] = useState(false);
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
}
