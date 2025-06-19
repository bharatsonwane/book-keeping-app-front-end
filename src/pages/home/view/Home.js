import React from "react";
import { useParams } from "react-router-dom";
import UiEntitesLayout from "src/layouts/entity";
import SchemaMainRenderer from "src/pages/bookKeeping/form/SchemaMainRenderer";
import { useGetSchemaByIdQuery } from "../api/entitties.api";
import Header from "../components/header";
import Table from "../components/table";

const Home = () => {
  const params = useParams();

  const { data } = useGetSchemaByIdQuery(
    { id: params.id },
    { skip: !params.id }
  );

  console.log("data", data);

  return (
    <>
      <Header data={data?.data?.schema?.children} />
      <Table
        data={data?.data?.schema?.children}
        query={data?.data?.schema?.sqlQueryList}
      />
    </>
  );
};

export default Home;
