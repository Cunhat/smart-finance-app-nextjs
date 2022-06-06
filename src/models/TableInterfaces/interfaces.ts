import { ITransaction } from '../Interfaces';
export interface ITableHeaderItem {
  title: string;
}

export interface ITableHeader extends Array<ITableHeaderItem> {}

export interface ITableDataItem extends ITransaction {}

export interface ITableData extends Array<ITableDataItem> {}

export interface ITableRowItem {
  expandableTitle: string;
  data: Array<ITableDataItem>;
}
