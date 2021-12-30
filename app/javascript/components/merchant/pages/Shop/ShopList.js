import React, {useState, useEffect, useContext} from "react";

import { Grid, Button, Card, CardContent, Typography, CardActions, Box } from "@mui/material";

import MerchantContext from "../../_contexts/merchantContext";
import { getJson, pathName } from "../../../utils";
import PageHeader from "../../_components/PageHeader";
import ShopOptions from "./ShopOptions";

export default function ShopList({
    setNewShop,
    setShopId
}){

    const merchant = useContext(MerchantContext);
    const [shops, setShops] = useState([]);
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
                `${process.env.MERCHANT_API}/shops`
            )
            .then(
                response => {
                    setShops(response.data);
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
        setNewShop(true);
        window.history.pushState(
            "newShop", 
            "newShop", 
            `/${pathName()}/new`
        );
    }

    const optionMenu = () => {
        return (
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Options
            </Button>
        );
    }

    const shopCard = (shop) => {
        return (
            <Card>
                <CardContent>
                    <Typography 
                        variant="h5" 
                        component="div"
                    >
                        {shop.name}
                    </Typography>
                    {/* <Typography 
                        sx={{ fontSize: 14 }} 
                        color="text.secondary" 
                        gutterBottom
                    >
                        Word of the Day
                    </Typography>
                    <Typography 
                        sx={{ mb: 1.5 }} 
                        color="text.secondary"
                    >
                        adjective
                    </Typography>
                    <Typography 
                        variant="body2"
                    >
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography> */}
                </CardContent>
                {/* <CardActions>
                    <Button 
                        size="small"
                        href={`/merchant/shops/${shop.id}`}
                    >
                        Learn More
                    </Button>
                </CardActions> */}
                <ShopOptions shop={shop}/>
            </Card>
        );
    }
    
    const getShops = () => {
        let start = 0;
        let end = 3;
        let tmpShopCards = [];
        while(start < shops.length){
            let shopSlice = shops.slice(start, end);
            tmpShopCards.push(
                <Grid 
                    key={`shop_grid_${start}-${end}`} 
                    container 
                    spacing={2}
                    style={styles.grid}
                >
                    {
                        shopSlice.map((shop) => {
                            return (
                                <Grid item
                                    key={`shopCard_${shop.id}`} 
                                    xs={4}
                                    md={4}
                                    lg={4}
                                >
                                    {shopCard(shop)}
                                </Grid>
                            );
                        })
                    }
                </Grid>
            );
            start = end;
            end += 3;
        }
        return tmpShopCards;
    }

    return (
        <Grid container spacing={5}>
            <PageHeader 
                pageType={"index"}
                resourceName={"Shop"}
                handleAddNewButtonClick={handleAddNewButtonClick}
            />
            <Box style={styles.box}>
                {getShops()}
            </Box>
        </Grid>
    );
}