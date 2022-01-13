import React, { useState, useEffect, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";

import ShopContext from "../../../_contexts/shopContext";
import PageHeader from "../../../_components/PageHeader";
import ProductForm from "../ProductForm";
import { CircularLoader, putJson, getJson } from "../../../../utils";

export default function UpdateProduct() {

    const getFormBodyRef = useRef();
    const shop = useContext(ShopContext);
    const { productId } = useParams();

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        let isMounted = true;
        if (loading) {
            getJson(
                `${process.env.MERCHANT_API}/shops/${shop.id}/products/${productId}`
            )
            .then(
                response => {
                    if (isMounted) {
                        console.log(response);
                        setProduct(response.data);
                        setLoading(false);
                    }
                },
                error => {
                    console.log(error);
                }
            )
            .catch((e) => console.log(e))
        }
        return () => { isMounted = false; }
    })


    const handleSaveButtonClick = () => {
        const formBody = getFormBodyRef.current.getFormBody();
        console.log(formBody);
        putJson(
            `${process.env.MERCHANT_API}/shops/${shop.id}/products/${productId}`,
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
                pageType={"update"}
                resourceName={"Product"}
                handleSaveButtonClick={handleSaveButtonClick}
            />
            {
                product
                ?
                <ProductForm
                    product={product}
                    ref={getFormBodyRef}
                />
                :
                <CircularLoader />
            }

        </Grid>
    );
}