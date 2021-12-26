import React, {useState, useEffect} from "react";

import { getJson } from "../../../utils";

export default function ShopList(){

    const [shops, setShops] = useState([]);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

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
        <h2>
            Shop list
        </h2>
    );
}