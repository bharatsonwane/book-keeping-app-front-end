import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { SCHEMA_CONSTANT } from "src/helper/schemaHelper";

export default function TableComponent(props) {
  const { node, value = [], handleActionTrigger = () => {} } = props;

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

  const handleRowClick = (e) => {
    const event = {
      actionType: SCHEMA_CONSTANT.onRowClick,
    };
    const newNode = {
      ...node,
      onRowClick: { ...node.onRowClick, id: e.row.id },
    };
    handleActionTrigger(event, newNode);
  };

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
        onRowClick={(e) => {
          handleRowClick(e, node);
        }}
      />
    </div>
  );
}
