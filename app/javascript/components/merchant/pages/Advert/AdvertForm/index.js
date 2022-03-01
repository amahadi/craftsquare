import React, { useState, forwardRef, useImperativeHandle } from "react"

import { Box, Grid, Stack, Button } from "@mui/material";

import FormContext from "../../../_contexts/formContext";
import MainForm from "./MainForm";
import MiscFrom from "./MiscForm";

const AdvertForm = forwardRef((props, ref) => {
  const { advert } = props;

  // advert attributes
  const [title, setTitle] = useState(advert && advert.title || "");
  const [description, setDescription] = useState(advert && advert.description || "");
  const [startDate, setStartDate] = useState(advert && advert.start_date || Date());
  const [endDate, setEndDate] = useState(advert && advert.end_date || Date());

  // advert misc attributes
  const [status, setStatus] = useState(advert && advert.status || "draft");
  const [deliveryMethod, setDeliveryMethod] = useState(advert && advert.delivery_method || "both");
  const [note, setNote] = useState(advert && advert.note || "");

  useImperativeHandle(
    ref,
    () => ({
      getFormBody() {
        return {
          title, description, status, note,
          start_date: startDate,
          end_date: endDate,
          delivery_method: deliveryMethod
        }
      }
    }),
  );

  const styles = {
    box: {
      display: "block",
      width: "80%",
      margin: "auto"
    }
  }

  const getMainAttributes = () => {
    return {
      title, description,
      startDate, endDate
    }
  }

  const getMainCallbacks = () => {
    return {
      setTitle, setDescription,
      setStartDate, setEndDate
    }
  }

  const getMiscAttibutes = () => {
    return {
      status, deliveryMethod, note
    }
  }

  const getMiscCallbacks = () => {
    return {
      setStatus, setDeliveryMethod, setNote
    }
  }

  return (
    <FormContext.Provider value={props}>
      <Box style={styles.box}>
        <Stack>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={8}>
              <MainForm
                attributes={getMainAttributes()}
                callbacks={getMainCallbacks()}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
              <Stack>
                <MiscFrom
                  attributes={getMiscAttibutes()}
                  callbacks={getMiscCallbacks()}
                />
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </FormContext.Provider>
  );
});

export default AdvertForm;