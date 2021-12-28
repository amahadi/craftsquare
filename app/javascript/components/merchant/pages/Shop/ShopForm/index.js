import React, {useState, useEffect} from "react";
import { Box, Divider } from "@mui/material";

import GeneralForm from "./GeneralForm";
import AddressForm from "./AddressForm";
import CharacteristicsForm from "./CharacteristicsForm";
import SettingsForm from "./SettingsForm";

export default function ShopFrom({
    attributes,
    callbacks
}){

    const styles = {
        box: {
            display: "block",
            width: "80%",
            margin: "auto"
        }
    }

    const getGeneralAttributes = () => {
        return {
            name: attributes.name
        }
    }

    const getAddressAttributes = () => {
        return {
           street: attributes.street, 
           apartmentNumber: attributes.apartmentNumber, 
           suiteNumber: attributes.suiteNumber, 
           postalCode: attributes.postalCode, 
           city: attributes.city, 
           province: attributes.province, 
           country: attributes.country, 
           latitude: attributes.latitude, 
           longitude: attributes.longitude 
        }
    }

    const getCharacteristicsAttributes = () => {
        return {
            tagList: attributes.tagList
        }
    }

    const getSettingsAttributes = () => {
        return {
            currency: attributes.currency, 
            language: attributes.language, 
            timeZone: attributes.timeZone
        }
    }

    return (
        <Box style={styles.box}>
            <GeneralForm
                attributes={getGeneralAttributes()} 
                setName={callbacks.setName}
            />
            <Divider
                sx={{
                    marginTop: "20px",
                    marginBottom: "20px"
                }} 
            />
            <AddressForm
               attributes={getAddressAttributes()}  
               setStreet={callbacks.setStreet}
               setApartmentNumber={callbacks.setApartmentNumber}
               setSuiteNumber={callbacks.setSuiteNumber}
               setPostalCode={callbacks.setPostalCode}
               setCity={callbacks.setCity}
               setProvince={callbacks.setProvince}
               setCountry={callbacks.setCountry}
               setLatitude={callbacks.setLatitude}
               setLongitude={callbacks.setLongitude}
            />
            <Divider
                sx={{
                    marginTop: "20px",
                    marginBottom: "20px"
                }} 
            />
            <CharacteristicsForm
                attributes={getCharacteristicsAttributes()}
                setTagList={callbacks.setTagList}
            />
            <Divider
                sx={{
                    marginTop: "20px",
                    marginBottom: "20px"
                }} 
            />
            <SettingsForm
                attributes={getSettingsAttributes()} 
                setCurrency={callbacks.setCurrency}
                setLanguage={callbacks.setLanguage}
                setTimeZone={callbacks.setTimeZone}
            />
        </Box>
    )

}