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

    const columns = [
        // { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'title',
            headerName: 'Title',
            width: 150,
            type: 'string',
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 150,
            type: 'string',
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            type: 'string',
            width: 110,
            editable: true,
        },
        // {
        //     field: 'fullName',
        //     headerName: 'Full name',
        //     description: 'This column has a value getter and is not sortable.',
        //     sortable: false,
        //     width: 160,
        //     valueGetter: (params) =>
        //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        // },
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

    useEffect(() => {
        let isMounted = true;
        if(loading){
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
                    console.log(response);
                    if (isMounted) {
                        setProducts(response.data);
                        setPagination(response.pagination);
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

    return (
        <Grid container spacing={5}>
            <PageHeader
                pageType={"index"}
                resourceName={"Products"}
                handleAddNewButtonClick={handleAddNewButtonClick}
            />
            <Box style={styles.box}>
                {
                    loading
                    ?
                    <CircularLoader />
                    :
                    <DataTable
                        data={products}
                        columns={columns}
                    />
                }
            </Box>
        </Grid>
    );
}