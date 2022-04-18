import type { NextPage } from "next";
import { PageLayout } from "../components/PageLayout";
import { Widget } from "../components/Widget";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <div style={{ height: "100%", width: "300px" }}>
        <Widget />
      </div>
    </PageLayout>
  );
};

export default Home;
