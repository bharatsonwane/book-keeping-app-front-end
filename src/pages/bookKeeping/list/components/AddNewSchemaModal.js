import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBookkeepingSchemaByAIAction } from "src/thunks/bookKeeping";

function AddNewSchemaModal({
  open,
  handleClose = () => {},
  refreshList = () => {},
}) {
  const dispatch = useDispatch();
  const [schemaDetails, setSchemaDetails] = useState({
    domainName: "",
    description: "",
  });

  const handleInputChange = (event) => {
    setSchemaDetails({
      ...schemaDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await dispatch(createBookkeepingSchemaByAIAction(schemaDetails)).unwrap();
      console.log("Schema Details:", schemaDetails);
      refreshList();
      handleClose();
      setSchemaDetails({
        domainName: "",
        description: "",
      })
    } catch (error) {
      console.info("Error in creating schema", error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ backgroundColor: "white", boxShadow: 24, p: 4, width: 400 }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add New Schema
        </Typography>

        <TextField
          name="domainName"
          label="Domain Name"
          variant="outlined"
          fullWidth
          value={schemaDetails.domainName}
          onChange={handleInputChange}
          margin="normal"
        />

        <TextField
          name="description"
          label="Schema Details"
          variant="outlined"
          fullWidth
          value={schemaDetails.description}
          onChange={handleInputChange}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Modal>
  );
}

export default AddNewSchemaModal;
