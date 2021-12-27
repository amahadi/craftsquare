import React from "react";
import PageHeader from "../../../_components/PageHeader";
import { Grid } from "@mui/material";

export default function CreateShop(){
    return (
        <Grid container spacing={5}>
            <PageHeader 
                pageType={"new"}
                resourceName={"Shop"}
            />
        </Grid>
    );
}