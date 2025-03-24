import React, { useState, useEffect, useMemo } from "react";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { Searchbox } from "src/components/searchbox";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {
  getBookkeepingColumnsForSchemaAction,
  getBookkeepingEntryForSchemaAction,
} from "src/thunks/bookKeeping";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";

function BookkeepingEntryList() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigation = useNavigate();

  const [columnList, setColumnList] = useState([]);
  const [entryList, setEntryList] = useState([]);

  const [search, changeSearch] = useState("");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const columns = useMemo(() => {
    const list = [];
    columnList.forEach((column) => {
      list.push({
        id: column.dataMappingName,
        dataMappingName: column.dataMappingName,
        label: column.label,
        minWidth: 170,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
      });
    });
    return list;
  }, [columnList]);

  useEffect(() => {
    getEntry();
  }, []);

  const getEntry = async () => {
    try {
      const [columnItems, entriesData] = await Promise.all([
        dispatch(getBookkeepingColumnsForSchemaAction(params.id)).unwrap(),
        dispatch(getBookkeepingEntryForSchemaAction(params.id)).unwrap(),
      ]);

      setColumnList(columnItems);
      setEntryList(entriesData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onChangeSearch = (e) => {
    let value = e.target.value;

    changeSearch(value);
  };

  return (
    <>
      <div
        className={`p-2 container-fluid d-flex flex-row justify-content-between bg-primary text-white`}
        style={{ alignItems: "center" }}
      >
        {/* add button */}
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            navigation(`/app/bookkeeping/schema/${params.id}/new`);
          }}
          sx={{ background: "white", color: "black", height: "40px" }}
        >
          Add Entry
        </Button>
        <h4>Bookkeeping Entry List</h4>
        <div className="w-20">
          <Searchbox
            value={search}
            onChange={onChangeSearch}
            placeholder={"Search on home"}
          />
        </div>
      </div>
      <div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow >
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, fontWeight: 'bold', fontSize: '1.2em' }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {entryList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const entryData = row.entryData;
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          if (column.id === "no") {
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {index + 1}
                              </TableCell>
                            );
                          }
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {_.get(entryData, column.dataMappingName, "")}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={entryList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  );
}

export default BookkeepingEntryList;
