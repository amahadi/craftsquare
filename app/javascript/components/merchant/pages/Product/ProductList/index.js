import React, {useState, useEffect, useContext} from "react";
import { useNavigate } from 'react-router-dom';

import { Grid, Button, Card, CardContent, Typography, CardActions, Box } from "@mui/material";

import ShopContext from "../../../_contexts/shopContext";
import { getJson } from "../../../../utils";
import PageHeader from "../../../_components/PageHeader";

export default function ProductList(){

    const navigate = useNavigate();

    const shop = useContext(ShopContext);
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
        let isMounted = true;
        if(loading){
            getJson(
                `${process.env.MERCHANT_API}/shops/${shop.id}/products`
            )
            .then(
                response => {
                    if(isMounted){
                        setProducts(response.data);
                        setLoading(false);
                    }
                },
                error => {
                    if(isMounted){
                        setErrors(error);
                        console.log(error);
                        setLoading(false);
                    }
                }
            )
        }
    })

    const handleAddNewButtonClick = () => {
        navigate(`/merchants/shops/${shop.id}/products/new`);
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