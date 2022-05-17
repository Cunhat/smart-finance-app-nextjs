import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface ISideBarItem {
  title: string;
  path: string;
  selected?: boolean;
  bottom?: boolean;
  icon: IconDefinition;
}

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
  data: [
    {
      date: number;
      description: string;
      category: string;
      tags: string;
    },
  ];
}
