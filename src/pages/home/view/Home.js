import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetDataByIdQuery,
  useGetSchemaByNameQuery,
} from "../../../redux/api/entitties.api";
import SchemaComponentRenderer from "src/components/schemaRender/SchemaComponentRenderer";

const Home = () => {
  const params = useParams();

  const { data: schemaInfo } = useGetSchemaByNameQuery(
    { name: params.schemaName },
    { skip: !params.schemaName }
  );
  const schemaData = schemaInfo?.data || {};

  const sqlQueryList = schemaData?.sqlQueryList || [];
  const defaultQueryName = schemaData?.defaultQueryName || "";
  const defaultQueryObject = sqlQueryList.find(
    (ele) => ele.queryName === defaultQueryName
  );

  const { data: nData } = useGetDataByIdQuery(
    { query: defaultQueryObject?.query },
    { skip: !defaultQueryObject?.query }
  );

  const handleClick = (e, node) => {
    console.log("bharatE", e)
    console.log("bharatNode", node)
  }

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
    >
      <SchemaComponentRenderer
        node={schemaData}
        sqlQueryList={schemaData?.sqlQueryList || []}
        dataObject={nData?.data || {}}
        formValidationObject={{}}
        handleClickChange={handleClick}
      />
    </div>
  );
};

export default Home;
