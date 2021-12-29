import React, {useState, useEffect, useContext} from "react";

import { Grid, Button, Card, CardContent, Typography, CardActions, Box } from "@mui/material";

import MerchantContext from "../../_contexts/merchantContext";
import { getJson, pathName } from "../../../utils";
import PageHeader from "../../_components/PageHeader";

export default function ProductList({
    setNewProduct,
    setProductId
}){

    const merchant = useContext(MerchantContext);
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const styles = {
        header: {
            container: {
                marginLeft: "10px"
            },
            title: {},
            button: {
                float: "right",
                marginTop: "20px"
            }
        },
        box: {
            width: "90%",
            margin: "auto"
        },
        grid: {
            margin: "auto auto 20px auto"
        }
    }

    useEffect(() => {
        if(loading){
            getJson(
                `${process.env.MERCHANT_API}/products`
            )
            .then(
                response => {
                    setProducts(response.data);
                    setLoading(false);
                },
                error => {
                    setErrors(error);
                    console.log(error);
                    setLoading(false);
                }
            )
        }
    })

    const handleAddNewButtonClick = () => {
        setNewProduct(true);
        window.history.pushState(
            "newProduct", 
            "newProduct", 
            `/${pathName()}/new`
        );
    }
    
    const getProducts = () => {
        
    }

    return (
        <Grid container spacing={5}>
            <PageHeader 
                pageType={"index"}
                resourceName={"Product"}
                handleAddNewButtonClick={handleAddNewButtonClick}
            />
            <Box style={styles.box}>
                {getProducts()}
            </Box>
        </Grid>
    );
}