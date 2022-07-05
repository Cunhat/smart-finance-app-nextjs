import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { PageLayout } from '../components/PageLayout';
import { Table } from '../components/Table';
import { ITableHeader, ITableRowItem } from '../models/TableInterfaces/interfaces';
import { ITransaction } from '../models/Interfaces';
import moment from 'moment';
import { trpc } from '@/utils/trpc';
import { Button } from '@/components/Buttons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TableFiltersContainer } from '@/styles/Settings';
import { PageTitle } from '@/components/Typography';
import { BasicTextInput } from '@/components/Inputs/BasicTextInput';
import { SelectInput } from '@/components/Inputs/Select';
import { loadCategories } from '@/redux/slices/categoriesSlice';
import { useDispatch } from 'react-redux';
import { CreateTransaction } from '@/components/CreateTransaction';

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

const Transactions: NextPage = () => {
  const [tableData, setTableData] = React.useState<Array<ITableRowItem>>([]);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  const { data, isLoading, error } = trpc.useQuery(['getTransactions'], {
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const categories = trpc.useQuery(['getCategories'], {
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data !== undefined && !isLoading) {
      formatData(data);
    }
  }, [data, isLoading]);

  useEffect(() => {
    if (categories.data !== undefined && categories.isSuccess) {
      dispatch(loadCategories(categories.data));
    }
  }, [categories.data, categories.isSuccess]);

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
    finalObject.forEach((item) => {
      item.data.sort((a, b) => {
        return moment(a.date).format('YYYYMMDD') < moment(b.date).format('YYYYMMDD') ? 1 : -1;
      });
    });

    return finalObject;
  }

  function formatData(data: ITransaction[]) {
    let finalObject: Array<ITableRowItem> = [];
    let yearObject: Array<ITableRowItem> = [];
    let currentDate = moment();

    data.forEach((item) => {
      let itemMonth = moment(item.date).format('MMMM');
      let itemYear = moment(item.date).format('YYYY');
      let objKey = finalObject.find((elem) => elem.expandableTitle === itemMonth);
      let currentYear = moment(currentDate).format('YYYY');

      if (objKey === undefined && itemYear === currentYear) {
        finalObject.push({
          expandableTitle: itemMonth,
          data: [item],
        });
      } else if (itemYear === currentYear) {
        finalObject.find((element) => element.expandableTitle === itemMonth)?.data.push(item);
      } else {
        let objKeyByYear = yearObject.find((elem) => elem.expandableTitle === itemYear);
        if (objKeyByYear === undefined) {
          yearObject.push({
            expandableTitle: itemYear,
            data: [item],
          });
        } else {
          yearObject.find((element) => element.expandableTitle === itemYear)?.data.push(item);
        }
      }
    });
    setTableData(sortObject(finalObject, yearObject));
  }

  return (
    <PageLayout>
      <CreateTransaction openModal={setIsOpen} isOpen={isOpen}/>
      <PageTitle title='Transactions' />
      <TableFiltersContainer>
        <BasicTextInput value='' placeholder='Search transaction...' onChange={() => {}} width='200px' />
        <Button onClick={() => setIsOpen(true)} title='Transaction' leftIcon={faPlus} />
      </TableFiltersContainer>

      {!isLoading && <Table header={header} tableData={tableData} />}
    </PageLayout>
  );
};

export default Transactions;
