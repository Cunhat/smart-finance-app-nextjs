import React, { useState } from 'react';
import TableCell from '@material-ui/core/TableCell';
import { TableExpandableItem } from './sytles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faPen, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

type ExpandableItemsProps = {
  open: boolean;
  title: string;
};

export function ExpandableItems(props: ExpandableItemsProps) {
  return (
    <>
      <TableCell colSpan={7} style={{ padding: '0px' }}>
        <TableExpandableItem>
          <p>{props.title}</p>
          {props.open ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}
        </TableExpandableItem>
      </TableCell>
    </>
  );
}
