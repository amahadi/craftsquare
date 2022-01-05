import React, {useRef, useContext} from "react";
import { Grid } from "@mui/material";
import PageHeader from "../../../_components/PageHeader";
import ProductForm from "../ProductForm";

import ShopContext from "../../../_contexts/shopContext";
import { postJson } from "../../../../utils";

export default function CreateProduct(){

    const getFormBodyRef = useRef();
    const shop = useContext(ShopContext);

    const handleSaveButtonClick = () => {
        const formBody = getFormBodyRef.current.getFormBody();
        console.log(formBody);
        postJson(
            `${process.env.MERCHANT_API}/shops/${shop.id}/products`,
            { product: formBody }
        )
        .then(
            response => {
                console.log(response);
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
                resourceName={"Product"}
                handleSaveButtonClick={handleSaveButtonClick}
            />
            <ProductForm
                type="new"
                ref={getFormBodyRef}
            />
        </Grid>
    );
}