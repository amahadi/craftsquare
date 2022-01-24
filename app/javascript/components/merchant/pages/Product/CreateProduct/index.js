import React, { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import ToastContext from "../../../_contexts/ToastContext";
import PageHeader from "../../../_components/PageHeader";
import ProductForm from "../ProductForm";

import ShopContext from "../../../_contexts/shopContext";
import { postJson } from "../../../../utils";

export default function CreateProduct() {

    const navigate = useNavigate();

    const getFormBodyRef = useRef();
    const shop = useContext(ShopContext);
    const setToast = useContext(ToastContext);

    const handleSaveButtonClick = () => {
        const formBody = getFormBodyRef.current.getFormBody();
        postJson(
            `${process.env.MERCHANT_API}/shops/${shop.id}/products`,
            { product: formBody }
        )
        .then(
            response => {
                console.log(response);
                navigate(`/merchants/shops/${shop.id}/products/${response.id}`);
                setToast({ type: 'success', message: 'New product is created successfully!' })
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