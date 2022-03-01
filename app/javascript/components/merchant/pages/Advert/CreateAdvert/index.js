import React, { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import ToastContext from "../../../_contexts/ToastContext";
import PageHeader from "../../../_components/PageHeader";
import AdvertForm from "../AdvertForm";

import ShopContext from "../../../_contexts/shopContext";
import { postJson } from "../../../../utils";

export default function CreateAdvert() {

  const navigate = useNavigate();

  const getFormBodyRef = useRef();
  const shop = useContext(ShopContext);
  const setToast = useContext(ToastContext);

  const handleSaveButtonClick = () => {
    const formBody = getFormBodyRef.current.getFormBody();
    postJson(
      `${process.env.MERCHANT_API}/shops/${shop.id}/adverts`,
      { product: formBody }
    )
      .then(
        response => {
          navigate(`/merchants/shops/${shop.id}/adverts/${response.id}`);
          setToast({ type: 'success', message: 'New advert is created successfully!' })
        },
        error => {
          console.log(error);
        }
      )
      .catch((e) => console.log(e))
  }

  return (
    <Grid container spacing={5}>
      <PageHeader
        pageType={"new"}
        resourceName={"Advert"}
        handleSaveButtonClick={handleSaveButtonClick}
      />
      <AdvertForm
        type="new"
        ref={getFormBodyRef}
      />
    </Grid>
  );
}