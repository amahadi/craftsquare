import React, {useContext, useState} from "react";
import { Grid } from "@mui/material";
import PageHeader from "../../../_components/PageHeader";
import ShopForm from "../ShopForm";
import { Toast } from "../../../../utils";

import { postJson } from "../../../../utils";

export default function CreateShop(){

    const [toast, setToast] = useState(null);

    // general attributes
    const [name, setName] = useState("");

    // address and location attributes
    const [street, setStreet] = useState("");
    const [apartmentNumber, setApartmentNumber] = useState("");
    const [suiteNumber, setSuiteNumber] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [country, setCountry] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    // characteristics attributes
    const [tagList, setTagList] = useState("");

    // settings attributes
    const [currency, setCurrency] = useState("");
    const [language, setLanguage] = useState("");
    const [timeZone, setTimeZone] = useState("");

    const handleSaveButtonClick = () => {
        const body = getBody();
        postJson(
            `${process.env.MERCHANT_API}/shops`,
            body
        ).then(
            response => {
                setToast({
                    type: "success",
                    message: "Shop created successfully"
                });
                window.history.pushState(
                    `shop_${response.id}`, 
                    `shop_${response.id}`, 
                    `/merchant/shops/${response.id}`
                );
                console.log(response);
            },
            error => {
                console.log(error);
            }
        ).catch((e) => {
            console.log(e);
        })
    }

    const getBody = () => {
        return {
            name,
            street, 
            apartment_number: apartmentNumber, 
            suite_number: suiteNumber, 
            postal_code: postalCode, 
            city, province, country, 
            latitude, longitude,
            tag_list: tagList,
            currency, language, 
            timezone: timeZone
        }
    }

    const getAttributes = () => {
        return {
            name,
            street, apartmentNumber, suiteNumber, 
            postalCode, city, province, country, 
            latitude, longitude,
            tagList,
            currency, language, timeZone
        }
    }

    const getCallbacks = () => {
        return {
            setName,
            setStreet, setApartmentNumber, setSuiteNumber,
            setPostalCode, setCity, setProvince, setCountry,
            setLatitude, setLongitude, 
            setTagList, 
            setCurrency, setLanguage, setTimeZone
        }
    }

    return (
        <Grid container spacing={5}>
            <PageHeader 
                pageType={"new"}
                resourceName={"Shop"}
                handleSaveButtonClick={handleSaveButtonClick}
            />
            <ShopForm 
                attributes={getAttributes()}
                callbacks={getCallbacks()}
            />
            {
                toast
                ?
                <Toast 
                    type={toast.type}
                    message={toast.message}
                />
                : null
            }
        </Grid>
    );
}