import React, { useState, useEffect } from "react";
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
import { getBookkeepingSchemaAction } from "src/redux/thunks/bookKeeping";
import { useNavigate } from "react-router-dom";
import AddNewSchemaModal from "./components/AddNewSchemaModal";
import { Button } from "@mui/material";

const columns = [
  { id: "no", label: "No", minWidth: 170 },
  { id: "label", label: "Label", minWidth: 170 },
  { id: "version", label: "Version", minWidth: 170 },
  { id: "createdAt", label: "Created At", minWidth: 170 },
  { id: "updatedAt", label: "Updated At", minWidth: 170 },
];

function BookKeepingList() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [bookkeepingSchemaList, setBookkeepingSchema] = useState([]);
  const [search, changeSearch] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [openAddNewSchemaModal, setOpenAddNewSchemaModal] = useState(false);

  useEffect(() => {
    getBookkeepingSchema();
  }, []);

  const getBookkeepingSchema = async () => {
    try {
      const responseData = await dispatch(
        getBookkeepingSchemaAction()
      ).unwrap();
      setBookkeepingSchema(responseData);
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
      <AddNewSchemaModal
        open={openAddNewSchemaModal}
        handleClose={() => {
          setOpenAddNewSchemaModal(false);
        }}
        refreshList={getBookkeepingSchema}
      />
      <div
        className={`p-2 container-fluid d-flex flex-row justify-content-between bg-primary text-white`}
        style={{ alignItems: "center" }}
      >
        {/* add button */}
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setOpenAddNewSchemaModal(true);
          }}
          sx={{ background: "white", color: "black", height: "40px" }}
        >
          Add New Schema
        </Button>
        <h4>Bookkeeping Schema List</h4>
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
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {bookkeepingSchemaList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                        onClick={() => {
                          if (row.isValidated) {
                            navigation(
                              `/app/bookkeeping/schema/${row.id}/list`
                            );
                          } else {
                            navigation(
                              `/app/bookkeeping/schema/${row.id}/schema-update`
                            );
                          }
                        }}
                        sx={{
                          cursor: "pointer",
                          backgroundColor: row.isValidated
                            ? "#88E788"
                            : "	#fffee0",
                        }}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          if (column.id === "no") {
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {index + 1}
                              </TableCell>
                            );
                          }
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
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
            count={bookkeepingSchemaList.length}
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

export default BookKeepingList;
