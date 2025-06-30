import React from "react";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { SCHEMA_CONSTANT } from "src/helper/schemaHelper";

export function HeadingWithButton(props) {
  const { node, formReadOnly, handleActionTrigger = (e, node) => {} } = props;
  const { label } = node;

  const { schemaName, uiActionType, id } = useParams();

  const handleCreateOrUpdate = () => {
    if (node.onUpdate && id) {
      const event = {
        actionType: SCHEMA_CONSTANT.onUpdate,
        target: {
          queryName: node.onUpdate.queryName,
          id: id,
        },
      };
      handleActionTrigger(event, node.onUpdate);
    } else if (node.onCreate) {
      const event = {
        actionType: SCHEMA_CONSTANT.onCreate,
        target: {
          queryName: node.onCreate.queryName,
        },
      };
      handleActionTrigger(event, node.onCreate);
    }
  };

  const handleEdit = () => {
    const event = {
      actionType: SCHEMA_CONSTANT.onSchemaMetadataChange,
      target: {
        name: "formReadOnly",
        value: false,
      },
    };
    handleActionTrigger(event, node.onUpdate);
  };

  return (
    <div
      className={`container-fluid d-flex flex-row-reverse justify-content-between bg-primary text-white`}
      style={{ alignItems: "center" }}
    >
      {uiActionType === SCHEMA_CONSTANT.CREATE ? (
        <>
          <Button
            variant="contained"
            color="secondary"
            onClick={(e) => {
              handleCreateOrUpdate();
            }}
            sx={{
              background: "white",
              color: "black",
              height: "40px",
              margin: "10px",
            }}
          >
            Add
          </Button>
          <h4>{label}</h4>
        </>
      ) : uiActionType === SCHEMA_CONSTANT.VIEW && formReadOnly === true ? (
        <>
          <Button
            variant="contained"
            color="secondary"
            onClick={(e) => {
              handleEdit();
            }}
          >
            edit
          </Button>
          <h4>{label}</h4>
        </>
      ) : uiActionType === SCHEMA_CONSTANT.VIEW && !formReadOnly ? (
        <>
          <Button
            variant="contained"
            color="secondary"
            onClick={(e) => {
              handleCreateOrUpdate();
            }}
          >
            Update
          </Button>
          <h4>{label}</h4>
        </>
      ) : null}

      <div className="w-20"></div>
    </div>
  );
}
