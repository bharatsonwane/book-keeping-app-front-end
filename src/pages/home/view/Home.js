import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetDataByIdQuery,
  useGetSchemaByNameQuery,
} from "../../../redux/api/entitties.api";
import { SchemaComponentRenderer } from "src/components/schemaRender/SchemaComponentRenderer";

const Home = () => {
  const params = useParams();
  const navigate = useNavigate();

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

  const { data: _queryData } = useGetDataByIdQuery(
    { query: defaultQueryObject?.query },
    { skip: !defaultQueryObject?.query }
  );

  const queryData = useMemo(() => {
    if (!defaultQueryObject?.query) return {};
    return _queryData?.data || {};
  }, [_queryData, defaultQueryObject?.query]);

  const handleClick = (e, node) => {
    const onClick = node.onClick;
    if (onClick && onClick.navigationPath) {
      let path = onClick.navigationPath;

      Object.keys(onClick).forEach((key) => {
        if (key !== "navigationPath") {
          path = path.replace(`:${key}`, onClick[key]);
        }
      });

      // Now navigate to the resolved path
      navigate(path);
    }
  };

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
    >
      <SchemaComponentRenderer
        node={schemaData}
        sqlQueryList={schemaData?.sqlQueryList || []}
        dataObject={queryData}
        formValidationObject={{}}
        handleClickChange={handleClick}
      />
    </div>
  );
};

export default Home;
