import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function TableComponent(props) {
  const { node, value = [] } = props;

  const { columns, rows } = (() => {
    const columns = node?.children?.map((ele) => {
      return {
        field: ele.name,
        headerName: ele.label,
        width: 130,
      };
    });

    const rows = value || [];

    return { columns, rows };
  })();

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
