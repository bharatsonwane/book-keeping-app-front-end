import React from "react";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { SCHEMA_CONSTANT } from "src/helper/schemaHelper";

export function HeadingWithButton(props) {
  const { node, handleActionTrigger = (e, node) => {} } = props;
  const { label } = node;

  const { schemaName, uiActionType, id } = useParams();

  const handleOnClick = () => {
    if (node.onCreate) {
      const event = {
        actionType: SCHEMA_CONSTANT.onCreate,
        target: {
          queryName: node.onCreate.queryName,
        },
      };
      handleActionTrigger(event, node.onCreate);
    } else if (node.onUpdate) {
      const event = {
        actionType: SCHEMA_CONSTANT.onUpdate,
        target: {
          queryName: node.onUpdate.queryName,
          id: id,
        },
      };
      handleActionTrigger(event, node.onUpdate);
    }
  };

  console.log("bharat", uiActionType);

  return (
    <div
      className={`container-fluid d-flex flex-row-reverse justify-content-between bg-primary text-white`}
      style={{ alignItems: "center" }}
    >
      {uiActionType === "create" ? (
        <>
          <Button
            variant="contained"
            color="secondary"
            onClick={(e) => {
              handleOnClick();
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
        </>
      ) : (
        <></>
      )}

      <div className="w-20"></div>
    </div>
  );
}
