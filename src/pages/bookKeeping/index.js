import React from "react";
import bookKeepingSchema from "src/helper/productSchema/bookKeepingSchema";
import SchemaFormFieldRenderer from "./components/SchemaTabRenderer";

function BookKeeping() {

  return (
    <div className="main-page-container">
      <SchemaFormFieldRenderer schema={bookKeepingSchema} />
    </div>
  );
}

export default BookKeeping;
