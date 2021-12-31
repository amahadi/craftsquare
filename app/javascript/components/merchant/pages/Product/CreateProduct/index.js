import React, {useRef} from "react";
import { Grid } from "@mui/material";
import PageHeader from "../../../_components/PageHeader";
import ProductForm from "../ProductForm";

export default function CreateProduct(){

    const getFormBodyRef = useRef();

    const handleSaveButtonClick = () => {
        const formBody = getFormBodyRef.current.getFormBody();
        console.log(formBody);
    }

    return (
        <Grid container spacing={5}>
            <PageHeader 
                pageType={"new"}
                resourceName={"Shop"}
                handleSaveButtonClick={handleSaveButtonClick}
            />
            <ProductForm 
                ref={getFormBodyRef}
            />
        </Grid>
    );
}