import React from "react";
import {
  Stack, Paper, TextField, Typography,
  InputLabel
} from "@mui/material";

import PickUpTimeForm from "./PickUpTimeForm";
import DropOffTimeForm from "./DropOffTimeForm";

export default function MainForm({
  attributes,
  callbacks
}) {
  const handleTitleFieldChange = (e) => {
    callbacks.setTitle(e.target.value);
  }

  const handleDescriptionFieldCHange = (e) => {
    callbacks.setDescription(e.target.value);
  }

  const handleStartDateFieldChange = (e) => {
    callbacks.setStartDate(e.target.value);
  }

  const handleEndDateFieldChange = (e) => {
    callbacks.setEndDate(e.target.value);
  }

  return (
    <Stack>
      <Paper
        sx={{
          padding: "20px",
          width: "100%"
        }}>
        <TextField
          id="id__productTitle-textfield"
          label="Title"
          value={attributes.title}
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleTitleFieldChange}
        />
        <TextField
          id="id__productDescription-textfield"
          label="Description"
          value={attributes.description}
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          onChange={handleDescriptionFieldCHange}
        />
        <Stack direction="row" spacing={2} style={{ marginTop: "16px", marginBottom: "8px" }}>
          <TextField
            id="startDate"
            label="Start date"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleStartDateFieldChange}
          />
          <TextField
            id="endDate"
            label="End date"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleEndDateFieldChange}
          />
        </Stack>
      </Paper>
      {

        attributes.deliveryMethod === "pick_up_only" || attributes.deliveryMethod === "both"
        ?
          <Paper
            sx={{
              marginTop: "16px",
              padding: "20px",
              width: "100%"
            }}
          >
            <PickUpTimeForm />
          </Paper>
        :
          null
      }
      {
        attributes.deliveryMethod === "both" || attributes.deliveryMethod === "drop_off_only"
        ?
          <Paper
            sx={{
              marginTop: "16px",
              padding: "20px",
              width: "100%"
            }}
          >
            <DropOffTimeForm />
          </Paper>
        :
          null
      }

    </Stack>

  );
}