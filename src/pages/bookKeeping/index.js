import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import transactionSchema from "src/helper/schema/transactionSchema";
import SchemaMainRenderer from "./components/SchemaMainRenderer";
import BookKeepingList from "./list";
import SchemaEditor from "./schemaEditor";

function BookKeeping() {
  const Location = useLocation();

  return (
    <div className="main-page-container">
      <Routes>
        <Route
          path={`/`}
          element={<Navigate replace="/" to={`${Location.pathname}/form`} />}
        />
        <Route path={"list"} element={<BookKeepingList />} />
        <Route
          path={"form"}
          element={<SchemaMainRenderer schema={transactionSchema} />}
        />

        <Route
          path={"schema-editor"}
          element={<SchemaEditor schema={transactionSchema} />}
        />
      </Routes>
    </div>
  );
}

export default BookKeeping;
