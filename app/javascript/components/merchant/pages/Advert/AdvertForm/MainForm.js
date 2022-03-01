import React from "react";
import {
  Stack, Paper, TextField, Typography,
  InputLabel
} from "@mui/material";

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
    </Stack>

  );
}