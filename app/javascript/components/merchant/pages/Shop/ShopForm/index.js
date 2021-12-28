import React, {useState, useEffect} from "react";
import { Box, Divider } from "@mui/material";

import GeneralForm from "./GeneralForm";
import AddressForm from "./AddressForm";

export default function ShopFrom({
    formType="new",
    shopId=null
}){
    // general attributes
    const [name, setName] = useState(null);

    // address and location attributes
    const [street, setStreet] = useState(null);
    const [apartmentNumber, setApartmentNumber] = useState(null);
    const [suiteNumber, setSuiteNumber] = useState(null);
    const [postalCode, setPostalCode] = useState(null);
    const [city, setCity] = useState(null);
    const [province, setProvince] = useState(null);
    const [country, setCountry] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    // settings attributes
    const [currency, setCurrency] = useState(null);
    const [language, setLanguage] = useState(null);
    const [timeZone, setTimeZone] = useState(null);
    const [tagList, setTagList] = useState(null);

    const styles = {
        box: {
            display: "block",
            width: "80%",
            margin: "auto"
        }
    }
    /**
     * get shop details and populate fields
     * if shopId is present
     */
    // useEffect(() => {
    //     if(formType === "update" && shopId){

    //     }
    // })

    console.log(name);

    return (
        <Box style={styles.box}>
            <GeneralForm 
                setName={setName}
            />
            <Divider
                sx={{
                    marginTop: "20px",
                    marginBottom: "20px"
                }} 
            />
            <AddressForm 
               setStreet={setStreet}
               setApartmentNumber={setApartmentNumber}
               setSuiteNumber={setSuiteNumber}
               setPostalCode={setPostalCode}
               setCity={setCity}
               setProvince={setProvince}
               setCountry={setCountry}
               setLatitude={setLatitude}
               setLongitude={setLongitude}
            />
        </Box>
    )

}