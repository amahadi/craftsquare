import React, { useState, useContext } from "react";

import {
  Grid, TextField, Stack, Button, IconButton
} from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

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

  return (
    <p>Delivery Date Time form</p>
  );
}