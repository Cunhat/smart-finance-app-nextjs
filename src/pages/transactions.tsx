import type { NextPage } from 'next';
import { PageLayout } from '../components/PageLayout';
import { Table } from '../components/Table';
import { ITableHeader, ITableData } from '../models/Interfaces';

const header: ITableHeader = [
  {
    title: 'Date',
  },
  {
    title: 'Description',
  },
  {
    title: 'Category',
  },
  {
    title: 'Tags',
  },
  {
    title: 'Amount',
  },
  {
    title: '',
  },
];

const a = new Date(2022,0,31);

const tableData:ITableData = [
  {
    date: Date.parse(a),
    description: 'January',
    category: 'Car',
    tags: 'Fixed Expenses',
    value: 30
  },
  {
    date:  Date.parse(new Date(2022,1,23)),
    description: 'Febuary',
    category: 'Fitness',
    tags: 'Fixed Expenses',
    value: 30
  },
  {
    date:  Date.parse(new Date(2021,0,30)),
    description: 'January',
    category: 'Restaurants',
    tags: 'For me',
    value: 30
  },
  {
    date:  Date.parse(new Date(2019,4,3)),
    description: 'May',
    category: 'Carro',
    tags: 'Fixed Expenses',
    value: 30
  },
  {
    date:  Date.parse(new Date(2022,4,3)),
    description: 'May',
    category: 'Car',
    tags: 'Fixed Expenses',
    value: 30
  },
  {
    date:  Date.parse(new Date(2020,4,3)),
    description: 'May',
    category: 'Car',
    tags: 'Fixed Expenses',
    value: 30
  },
  {
    date:  Date.parse(new Date(2020,4,3)),
    description: 'May',
    category: 'Carro',
    tags: 'Fixed Expenses',
    value: 30
  },
  {
    date:  Date.parse(new Date(2022,4,3)),
    description: 'May',
    category: 'Car',
    tags: 'Fixed Expenses',
    value: 30
  },
  {
    date:  Date.parse(new Date(2022,4,2)),
    description: 'May',
    category: 'Car',
    tags: 'Fixed Expenses',
    value: 30
  },
  {
    date:  Date.parse(new Date(2022,4,23)),
    description: 'May',
    category: 'Car',
    tags: 'Fixed Expenses',
    value: 30
  },
  {
    date:  Date.parse(new Date(2022,2,30)),
    description: 'March',
    category: 'Car',
    tags: 'Fixed Expenses',
    value: 30
  },
];

const Transactions: NextPage = () => {
  return (
    <PageLayout>
      <Table header={header} tableData={tableData}/>
    </PageLayout>
  );
};

export default Transactions;
