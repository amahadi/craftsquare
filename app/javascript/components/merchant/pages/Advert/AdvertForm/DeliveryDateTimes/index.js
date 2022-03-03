import React, { useState, useEffect, useContext } from "react";
import {
  Grid, Divider, Button, Stack, FormHelperText,
  IconButton, FormControlLabel, Checkbox
} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import FormContext from "../../../../_contexts/formContext";

export default function DeliveryDateTimes(
  advertId,
  deliveryDateTimes,
  setDeliveryDateTimes
) {

  const formContext = useContext(FormContext);
  const [hadDeliveryDateTimes, setHasDeliveryDateTimes] = useState(deliveryDateTimes.length > 0);
  const [deletedDeliveryDateTimes, setDeletedDeliveryDateTimes] = useState([]);

  const DeliveryDateTimeSchema = {
    weekday: "",
    fromTime: "",
    toTime: "",
    deliveryType: "",
    deleted: false,
    saved: false
  }

  const handleAddMoreDeliveryDateTimeButtonClick = () => {
    setOptions([...deliveryDateTimes, DeliveryDateTimeSchema])
  }

  const handleDeleteButtonClick = (index) => {
    const tmp = deliveryDateTimes;
    tmp[index].deleted = true;
    setDeliveryDateTimes([...tmp]);
  }

  const handleDoneButtonClick = (deliveryDateTimesObj, index) => {
    const tmp = deliveryDateTimes;
    tmp.splice(index, 1, deliveryDateTimesObj);
    setDeliveryDateTimes([...tmp]);
  }

  const getDeliveryDateTimeComponents = () => {
    return (
      <Stack id="deliveryDateTimesStackContainer">
        {
          // options.map((option, index) => (
          //   option.deleted ? "" :
          //     <div key={`variantOption_${index}`} id={`variantOptionContainer_${index}`} >
          //       <VariantOptionForm
          //         variantId={variantId}
          //         option={option}
          //         index={index}
          //         onDoneButtonClick={variantId ? null : handleDoneButtonClick}
          //         onDeleteButtonClick={handleDeleteButtonClick}
          //       />
          //     </div>
          // ))
          "Delivery Date Times components"
        }
      </Stack>
    );
  }

  return (
    <Stack id="deliveryDateTimesContainer">
      <FormHelperText>
        {
          "List the different options available for a specific variant.\
                    For ex. a product, shirt, can have multiple variants depending \
                    on the colors and one color can have various sizes available to \
                    purchase. Here, 'size' is the variant title and 'xs, s, m, l, xl' \
                    is the variant value list. Separate each option in the option list \
                    with a comma(,)."
        }
      </FormHelperText>
      {
        hadDeliveryDateTimes
          ?
          <React.Fragment>
            {getDeliveryDateTimeComponents()}
            <Button
              variant="text"
              startIcon={<AddCircleOutlineIcon />}
              onClick={handleAddMoreDeliveryDateTimeButtonClick}
            >
              Add more delivery date times
            </Button>
          </React.Fragment>
          : null
      }
    </Stack>
  );
}