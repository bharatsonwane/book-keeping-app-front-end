import React from "react";
import { Button } from "@mui/material";

export function HeadingWithButton(props) {
  const { node, onClick = (e, node) => {} } = props;

  const { label } = node;

  return (
    <div
      className={`container-fluid d-flex flex-row-reverse justify-content-between bg-primary text-white`}
      style={{ alignItems: "center" }}
    >
      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => {
          onClick(e, node);
        }}
        sx={{
          background: "white",
          color: "black",
          height: "40px",
          margin: "10px",
        }}
      >
        Add Entry
      </Button>
      <h4>Add New Entry</h4>
      <div className="w-20"></div>
    </div>
  );
}
