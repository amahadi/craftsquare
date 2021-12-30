import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import PageHeader from "../../../_components/PageHeader";
import ShopForm from "../ShopForm";
import { Toast, CircularLoader, getJson, putJson } from "../../../../utils";

export default function UpdateShop(){

    const { id } = useParams();

    const [loading, setLoading] = useState(true);
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

    useEffect(() => {
        if(loading){
            getJson(
                `${process.env.MERCHANT_API}/shops/${id}`
            )
            .then(
                response => {
                    const data = response.data;
                    console.log(data);
                    setLoading(false);
                    setName(data.name);
                    setStreet(data.street); 
                    setApartmentNumber(data.apartment_number); 
                    setSuiteNumber(data.suite_number);
                    setPostalCode(data.postal_code); 
                    setCity(data.city); 
                    setProvince(data.province); 
                    setCountry(data.country);
                    setLatitude(data.latitude); 
                    setLongitude(data.longitude);
                    const tag_list = data.tag_list.join(", ");
                    setTagList(tag_list); 
                    setCurrency(data.currency); 
                    setLanguage(data.language);
                    setTimeZone(data.timezone || "");
                },
                error => {
                    console.log(error);
                }
            )
            .catch((error) => {
                console.log(error);
            })
        }
    })

    const handleSaveButtonClick = () => {
        const body = getBody();
        putJson(
            `${process.env.MERCHANT_API}/shops/${id}`,
            body
        ).then(
            response => {
                setToast({
                    type: "success",
                    message: "Shop updated successfully"
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
            {
                loading
                ?
                <CircularLoader />
                :
                <ShopForm 
                    attributes={getAttributes()}
                    callbacks={getCallbacks()}
                />
            }
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