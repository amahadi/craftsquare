import React, {useState, useEffect, useContext} from "react";
import { useNavigate } from 'react-router-dom';

import { Grid, Button, Card, CardContent, Typography, CardActions, Box } from "@mui/material";

import ShopContext from "../../../_contexts/shopContext";
import { getJson, CircularLoader } from "../../../../utils";
import PageHeader from "../../../_components/PageHeader";
import DataTable from "../../../_components/DataTable";

export default function ProductList(){

    const navigate = useNavigate();

    const shop = useContext(ShopContext);
    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    // DataTable variables
    const [filters, setFilters] = useState(null);

    useEffect(() => {
        let isMounted = true;
        if (loading) {
            let productsUrl = filters
                ?
                `${process.env.MERCHANT_API}/shops/${shop.id}/products`
                :
                `${process.env.MERCHANT_API}/shops/${shop.id}/products?filter=filter`
            getJson(
                productsUrl
            )
            .then(
                response => {
                    if (isMounted) {
                        setProducts(response.data);
                        setPagination(response.pagination);
                        setLoading(false);
                    }
                },
                error => {
                    if (isMounted) {
                        setErrors(error);
                        console.log(error);
                        setLoading(false);
                    }
                }
            )
        }
        return () => { isMounted = false; }
    })

    const columns = [
        { name: 'id', options: { display: 'excluded' } },
        {
            name: 'title',
            label: 'Title',
            options: {
                filter: false,
                sort: true
            }
        },
        {
            name: 'description',
            label: 'Description',
            options: {
                filter: false,
                sort: true
            }
        },
        {
            name: 'status',
            label: 'Status',
            options: {
                filter: true,
                sort: true
            }
        }
    ];

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

    const handleAddNewButtonClick = () => {
        navigate(`/merchants/shops/${shop.id}/products/new`);
    }

    const handleOnRowClick = (rowData, rowMeta) => {
        const productId = rowData[0];
        navigate(`/merchants/shops/${shop.id}/products/${productId}`);
    }

    return (
        <Grid container spacing={5}>
            <PageHeader
                pageType={"index"}
                resourceName={"Product"}
                handleAddNewButtonClick={handleAddNewButtonClick}
            />
            <Box style={styles.box}>
                {
                    loading
                    ?
                    <CircularLoader />
                    :
                    <DataTable
                        loading={loading}
                        data={products}
                        columns={columns}
                        onRowClick={handleOnRowClick}
                    />
                }
            </Box>
        </Grid>
    );
}