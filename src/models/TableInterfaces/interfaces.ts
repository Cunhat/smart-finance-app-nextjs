export interface ITableHeaderItem {
    title: string;
  }
  
  export interface ITableHeader extends Array<ITableHeaderItem> {}
  
  export interface ITableDataItem {
    date: number;
    description: string;
    category: string;
    tags: string;
    value: number;
  }
  
  export interface ITableData extends Array<ITableDataItem> {}
  
  export interface ITableRowItem {
    expandableTitle: string;
    data: Array<ITableDataItem>;
  }
  