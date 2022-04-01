import React, { useState, useContext } from "react";

import {
  Grid, TextField, Stack, Button, IconButton, FormControl, Select, MenuItem, InputLabel, Divider
} from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

import FormContext from "../../../../_contexts/formContext";
import ToastContext from "../../../../_contexts/ToastContext";

import { postJson, putJson, deleteJson } from "../../../../../utils";

export default function DeliveryDateTimeForm(
  advertId,
  deliveryDateTime,
  index,
  onEditButtonClick = null,
  onDeleteButtonClick = null,
  onDoneButtonClick = null
) {

  const formContext = useContext(FormContext);
  const setToast = useContext(ToastContext);

  // Delivery date time attributes
  const deliveryDateTimeId = deliveryDateTime.id;
  const [weekday, setWeekday] = useState(deliveryDateTime.weekday || "");
  const [fromTime, setFromTime] = useState(deliveryDateTime.fromTime || "");
  const [toTime, setToTime] = useState(deliveryDateTime.toTime || "");
  const [deliveryType, setDeliveryType] = useState(deliveryDateTime.deliveryType || "");
  const [deleted, setDeleted] = useState(deliveryDateTime.deleted || false);
  const [saved, setSaved] = useState(deliveryDateTime.saved || false);
  const [editMode, setEditMode] = useState(
    formContext && formContext.type === "new" || (formContext.type === "update" && !deliveryDateTimeId)
  );

  const weekdays = [
    { label: "Saturday", value: "saturday" },
    { label: "Sunday", value: "sunday" },
    { label: "Monday", value: "monday" },
    { label: "Tuesday", value: "tuesday" },
    { label: "Wednesday", value: "wednesday" },
    { label: "Thursday", value: "thursday" },
    { label: "Friday", value: "friday" },
  ];

  const deliveryTypes = [
    { label: "Pick up and drop off", value: "pick_up_and_drop_off" },
    { label: "Pick up only", value: "pick_up_only" },
    { label: "Drop off only", value: "drop_off_only" }
  ]

  // setters

  /** handler of the field change */

  const handleWeekdayFieldChange = (event) => {
    setWeekday(event.target.value);
  }

  const handleFromTimeFieldChange = (event) => {
    setFromTime(event.target.value);
  }

  const handleToTimeFieldChange = (event) => {
    setToTime(event.target.value);
  }

  const handleDeliveryTypeFieldChange = (event) => {
    setDeliveryType(event.target.value);
  }

  /** handler of the field change */

  /* Action button click handler callbacks */

  const handleEditButtonClick = () => {

  }

  const handleDoneButtonClick = () => {

  }

  const handleDeleteButtonClick = () => {

  }

  /* Action button click handler callbacks */


  /** Component generator functions */

  const getActionButtonsComponent = () => {
    return (

      <Stack direction="row">
        {
          editMode ?
            <IconButton
              aria-label="Done"
              size="small"
              value={index}
              onClick={handleDoneButtonClick}
            >
              <DoneRoundedIcon />
            </IconButton>
            :
            <IconButton
              aria-label="Edit"
              size="small"
              value={index}
              onClick={handleEditButtonClick}
            >
              <EditRoundedIcon />
            </IconButton>
        }
        <IconButton
          aria-label="Delete"
          size="small"
          value={index}
          onClick={handleDeleteButtonClick}
        >
          <DeleteRoundedIcon />
        </IconButton>
      </Stack>
    );
  }

  /** Component generator functions */

  return (
    <div>
      <Grid
        id={`deliveryDateTimeForm_${index}_container`}
        className={`deliveryDateTimeForm_container`}
        container
        spacing={2}
      >
        <Grid item xs={12} md={10} lg={11}>
          <Grid
            id={`deliveryDateTimeForm_${index}_date_time_container`}
            container
            spacing={2}
          >
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <InputLabel id={`deliveryDateTImeForm_${index}_weekday_select_inputLabel`}>Weekday</InputLabel>
                <Select
                  labelId={`deliveryDateTImeForm_${index}_weekday_select_inputLabel`}
                  id={`deliveryDateTImeForm_${index}_weekday_select_label`}
                  value={weekday}
                  label="Weekday"
                  onChange={handleWeekdayFieldChange}
                >
                  {
                    weekdays.map((weekday, day) => (
                      <MenuItem
                        key={`deliveryDateTimeForm_${index}_weekday_${day}`}
                        id={`deliveryDateTimeForm_${index}_weekday_${day}`}
                        value={weekday.value}
                      >
                        {weekday.label}
                      </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField
                id={`deliveryDateTimeForm_${index}_fromTime`}
                label="From time"
                type="time"
                defaultValue="07:30"
                sx={{
                  width: "100%"
                }}
                onChange={handleFromTimeFieldChange}
              />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <TextField
                id={`deliveryDateTimeForm_${index}_toTime`}
                label="To time"
                type="time"
                defaultValue="16:30"
                sx={{
                  width: "100%"
                }}
                onChange={handleToTimeFieldChange}
              />
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <InputLabel id={`deliveryDateTImeForm_${index}_deliveryType_select_inputLabel`}>Delivery type</InputLabel>
                <Select
                  labelId={`deliveryDateTImeForm_${index}_deliveryType_select_inputLabel`}
                  id={`deliveryDateTImeForm_${index}_deliveryType_select_label`}
                  value={deliveryType}
                  label="Delivery type"
                  onChange={handleDeliveryTypeFieldChange}
                >
                  {
                    deliveryTypes.map((type, typeIndex) => (
                      <MenuItem
                        key={`deliveryDateTimeForm_${index}_deliveryType_${typeIndex}`}
                        id={`deliveryDateTimeForm_${index}_deliveryType_${typeIndex}`}
                        value={type.value}
                      >
                        {type.label}
                      </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={2} lg={1}>
          {getActionButtonsComponent()}
        </Grid>
      </Grid>
      <Divider variant="middle"></Divider>
    </div>
  );
}