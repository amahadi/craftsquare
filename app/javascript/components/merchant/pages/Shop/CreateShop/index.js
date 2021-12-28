import React from "react";
import { Grid } from "@mui/material";
import PageHeader from "../../../_components/PageHeader";
import ShopForm from "../_components/ShopForm";

export default function CreateShop(){

    const handleSaveButtonClick = () => {

    }
    return (
        <Grid container spacing={5}>
            <PageHeader 
                pageType={"new"}
                resourceName={"Shop"}
                handleSaveButtonClick={handleSaveButtonClick}
            />
            <ShopForm />
        </Grid>
    );
}