import React from "react";
import bookKeepingSchema from "src/helper/productSchema/bookKeepingSchema";
import SchemaMainRenderer from "./components/SchemaMainRenderer";

function BookKeeping() {
  return (
    <div className="main-page-container">
      <SchemaMainRenderer schema={bookKeepingSchema} />
    </div>
  );
}

export default BookKeeping;
