import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import transactionSchema from "src/helper/schema/transactionSchema";
import SchemaMainRenderer from "./form/SchemaMainRenderer";
import BookKeepingList from "./list";
import UpdateSchema from "./updateSchema";
import BookkeepingEntryList from "./entryList";

function BookKeeping() {
  const Location = useLocation();

  return (
    <div className="main-page-container">
      <Routes>
        <Route
          path={`/`}
          element={<Navigate replace="/" to={`${Location.pathname}/list`} />}
        />
        <Route path={"schema/:id/list"} element={<BookkeepingEntryList />} />
        <Route path={"schema/:id/schema-update"} element={<UpdateSchema />} />

        <Route path={"list"} element={<BookKeepingList />} />

        <Route
          path={"schema/:id/new"}
          element={<SchemaMainRenderer schema={transactionSchema} />}
        />
      </Routes>
    </div>
  );
}

export default BookKeeping;
