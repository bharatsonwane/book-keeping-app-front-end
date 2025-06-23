import { Box, Modal, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBookkeepingSchemaByAIAction } from "src/redux/thunks/bookKeeping";

function AddNewSchemaModal({
  open,
  handleClose = () => {},
  refreshList = () => {},
}) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [schemaDetails, setSchemaDetails] = useState({
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
      setLoading(true);
      await dispatch(createBookkeepingSchemaByAIAction(schemaDetails)).unwrap();
      console.log("Schema Details:", schemaDetails);
      refreshList();
      handleClose();
      setSchemaDetails({
        description: "",
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
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

        {loading && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <CircularProgress />
          </div>
        )}

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
