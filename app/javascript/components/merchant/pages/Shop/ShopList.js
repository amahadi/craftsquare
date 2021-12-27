import React, {useState, useEffect, useContext} from "react";

import { Grid, Button } from "@mui/material";

import MerchantContext from "../../_contexts/merchantContext";
import { getJson } from "../../../utils";

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
        }
    }

    useEffect(() => {
        if(loading){
            getJson(
                `${process.env.MERCHANT_API}/shops`
            )
            .then(
                response => {
                    setShops(response);
                    console.log(response);
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
        window.history.pushState("newShop", "newShop", `${window.location.pathname}/new`);
    }

    const getHeading = () => {

        return (
            <Grid container spacing={3} className='ShopHeaderGrid' style={styles.header.container}>
                <Grid item xs={8} md={8} lg={9}>
                    <h2>Shops</h2>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={4} md={4} lg={3}>
                    <Button 
                        variant="contained" 
                        style={styles.header.button}
                        onClick={handleAddNewButtonClick}
                    >
                        Add new
                    </Button>
                </Grid>
            </Grid>
        );
    }

    const shopCard = (shop) => {
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography 
                    variant="h5" 
                    component="div"
                >
                    {shop.title}
                </Typography>
                <Typography 
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
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    } 

    return (
        <Grid container spacing={5}>
            {getHeading()}
        </Grid>
    );
}