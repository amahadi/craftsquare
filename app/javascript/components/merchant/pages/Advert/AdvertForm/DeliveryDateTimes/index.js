import React, { useState, useEffect, useContext } from "react";
import {
  Grid, Divider, Button, Stack, FormHelperText,
  IconButton, FormControlLabel, Checkbox
} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import FormContext from "../../../../_contexts/formContext";
import DeliveryDateTimeForm from "./DeliveryDateTimeForm";

export default function DeliveryDateTimes(props) {

  const { advertId, deliveryDateTimes, deliveryDateTimeSchema, setDeliveryDateTimes } = props;

  const formContext = useContext(FormContext);
  const [deletedDeliveryDateTimes, setDeletedDeliveryDateTimes] = useState([]);

  const handleAddMoreDeliveryDateTimeButtonClick = () => {
    setDeliveryDateTimes([...deliveryDateTimes, deliveryDateTimeSchema])
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
          deliveryDateTimes.map((deliveryDateTime, index) => (
            deliveryDateTime.deleted ? "" :
              <div key={`deliveryDateTime_${index}`} id={`deliveryDateTime_${index}`}>
                <DeliveryDateTimeForm
                  advertId={advertId}
                  deliveryDateTime={deliveryDateTime}
                  index={index}
                  onDeleteButtonClick={handleDeleteButtonClick}
                  onDoneButtonClick={handleDoneButtonClick}
                />
              </div>
          ))
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
      }
    </Stack>
  );
}