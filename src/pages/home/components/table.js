import React from "react";
import CustomTable from "src/components/Table";
import { useGetDataByIdQuery } from "../api/entitties.api";

const Table = ({ data, query }) => {
  const table = data?.find((ele) => ele.type == "table");

  const nQuery = query?.find((ele) => table?.queryName == ele.queryName);

  const { data: nData } = useGetDataByIdQuery(
    { query: nQuery?.query },
    { skip: !nQuery?.query }
  );

  const columns = table?.children
    ?.filter((ele) => ele.type === "tableColum")
    .map((col) => ({
      id: col.name,
      label: col.label,
      align: "left",
    }));

  return (
    <div>
      <CustomTable columns={columns} rows={nData?.data?.rows || []} />
    </div>
  );
};

export default Table;
