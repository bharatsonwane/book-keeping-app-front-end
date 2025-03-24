import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import { TextField, Button } from "@mui/material";
import { useState } from "react";

function AddNewSchemaModal({
  open,
  handleClose = () => {},
  refreshList = () => {},
}) {
  const [schemaDetails, setSchemaDetails] = useState("");

  const handleInputChange = (event) => {
    setSchemaDetails(event.target.value);
  };

  const handleSubmit = () => {
    try {
      console.log("Schema Details:", schemaDetails);
      refreshList();
      handleClose();
    } catch (error) {}
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
          label="Schema Details"
          variant="outlined"
          fullWidth
          value={schemaDetails}
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
