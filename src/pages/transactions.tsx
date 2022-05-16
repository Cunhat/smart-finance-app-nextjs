import type { NextPage } from 'next';
import { PageLayout } from '../components/PageLayout';
import { Table } from '../components/Table';
import { ITableHeader } from '../models/Interfaces';

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

const tableData = [
  {
    date: '',
    description: 'Volvo',
    category: 'Carro',
    tags: 'Fixed Expenses',
  },
  {
    date: '',
    description: 'Crossfit',
    category: 'Fitness',
    tags: 'Fixed Expenses',
  },
  {
    date: '',
    description: 'Jantar Fora',
    category: 'Dinners',
    tags: 'For me',
  },
  {
    date: '',
    description: 'Etc',
    category: 'Carro',
    tags: 'Fixed Expenses',
  },
  {
    date: '',
    description: 'Volvo',
    category: 'Carro',
    tags: 'Fixed Expenses',
  },
];

const Transactions: NextPage = () => {
  return (
    <PageLayout>
      <Table header={header} />
    </PageLayout>
  );
};

export default Transactions;
