import React from "react";

import {
  Paper, Typography, TextField, Divider, Stack,
  Select, MenuItem, FormControl, InputLabel,
  FormHelperText
} from "@mui/material";

export default function MiscFrom({
  attributes,
  callbacks
}) {

  const handleStatusFieldChange = (e) => {
    callbacks.setStatus(e.target.value);
  }

  const handleDeliveryMethodFieldChange = (e) => {
    callbacks.setDeliveryMethod(e.target.value);
  }

  const handleNoteFieldChange = (e) => {
    callbacks.setNote(e.target.value);
  }

  return (
    <Paper
      sx={{
        padding: "20px",
        width: "100%"
      }}
    >
      <Stack>
        <FormControl
          fullWidth
          margin="normal"
        >
          <InputLabel id="id__advertStatus-label" >Status</InputLabel>
          <Select
            labelId="id__advertStatus-label"
            id="id__advertStatus-textfield"
            label="Status"
            value={attributes.status}
            variant="outlined"
            fullWidth
            onChange={handleStatusFieldChange}
          >
            <MenuItem value="draft">Draft</MenuItem>
            <MenuItem value="active">Active</MenuItem>
          </Select>
          <FormHelperText>
            Choose to make the advert active. You can save a draft status of the advert and come back later to complete from where you left of and make the advert active.
          </FormHelperText>
        </FormControl>
        <Divider />
        <FormControl
          fullWidth
          margin="normal"
        >
          <InputLabel id="id__advertDeliveryMethod-label">Delivery method</InputLabel>
          <Select
            labelId="id__advertDeliveryMethod-label"
            id="id__advertDeliveryMethod-textfield"
            label="Delivery method"
            value={attributes.deliveryMethod}
            variant="outlined"
            fullWidth
            onChange={handleDeliveryMethodFieldChange}
          >
            <MenuItem value="both">Both</MenuItem>
            <MenuItem value="pick_up_only">Pick up only</MenuItem>
            <MenuItem value="drop_off_only">Drop off only</MenuItem>
          </Select>
          <FormHelperText>
           Choose the delivery method that you would like to provide to your customer.
          </FormHelperText>
        </FormControl>
        <Divider />
        <TextField
          id="id__advertNote-textfield"
          label="Note"
          value={attributes.description}
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          onChange={handleNoteFieldChange}
          helperText="Use this to specify any special note for this advert. For example, you may want to direct the customer to the delivery times by saying: 'IMPORTANT NOTICE: PLEASE REFER TO THE PICK UP TIMES SECTION FOR TIMES TO PICK UP AND DROP OFF.'"
        />
      </Stack>
    </Paper>
  )
}