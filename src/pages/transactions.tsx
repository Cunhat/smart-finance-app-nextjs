import type { NextPage } from "next";
import { PageLayout } from "../components/PageLayout";
import { Table } from "../components/Table";

const Transactions: NextPage = () => {
  return (
    <PageLayout>
      <Table />
    </PageLayout>
  );
};

export default Transactions;
