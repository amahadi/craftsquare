import React, {useState} from "react";
import {Grid, Paper, TextField} from "@mui/material";

export default function AddressForm({
    attributes,
    setStreet,
    setApartmentNumber,
    setSuiteNumber,
    setPostalCode,
    setCity,
    setProvince,
    setCountry,
    setLatitude,
    setLongitude
}){

    const [isLocationSet, setIsLocationSet] = useState(false);

    const handleStreetFieldChange = (event) => {
        setStreet(event.target.value);
    }

    const handleApartmentFieldChange = (event) => {
        setApartmentNumber(event.target.value);
    }

    const handleSuiteFieldChange = (event) => {
        setSuiteNumber(event.target.value);
    }

    const handlePostalCodeFieldChange = (event) => {
        setPostalCode(event.target.value);
    }

    const handleCityFieldChange = (event) => {
        setCity(event.target.value);
    }

    const handleProvinceFieldChange = (event) => {
        setProvince(event.target.value);
    }

    const handleCountryFieldChange = (event) => {
        setCountry(event.target.value);
    }

    if(!isLocationSet){
        navigator.geolocation.getCurrentPosition(
            position => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
                setIsLocationSet(true);
            },
            error => {}
        );
    }

    return (
        <Grid
            container
            spacing={2}
        >
            <Grid 
                item
                xs={6}
                md={6}
                lg={4}
            >
                Address
            </Grid>
            <Grid 
                item
                xs={6}
                md={6}
                lg={8}
            >
                <Paper
                    sx={{
                        width: "100%",
                        padding: "20px"
                    }}>
                        <TextField 
                            id="id__street-textfield" 
                            label="Street"
                            value={attributes.street} 
                            variant="outlined" 
                            sx={{
                                paddingBottom: "10px"
                            }}
                            fullWidth
                            onChange={handleStreetFieldChange}
                        />
                        <TextField 
                            id="id__apartment-textfield" 
                            label="Apartment number"
                            value={attributes.apartmentNumber} 
                            variant="outlined" 
                            sx={{
                                paddingBottom: "10px"
                            }}
                            fullWidth
                            onChange={handleApartmentFieldChange}
                        />
                        <TextField 
                            id="id__suite-textfield" 
                            label="Suite"
                            value={attributes.suiteNumber} 
                            variant="outlined" 
                            sx={{
                                paddingBottom: "10px"
                            }}
                            fullWidth
                            onChange={handleSuiteFieldChange}
                        />
                        <TextField 
                            id="id__postalCode-textfield" 
                            label="Postal code"
                            value={attributes.postalCode} 
                            variant="outlined" 
                            sx={{
                                paddingBottom: "10px"
                            }}
                            fullWidth
                            onChange={handlePostalCodeFieldChange}
                        />
                        <TextField 
                            id="id__city-textfield" 
                            label="City"
                            value={attributes.city} 
                            variant="outlined" 
                            sx={{
                                paddingBottom: "10px"
                            }}
                            fullWidth
                            onChange={handleCityFieldChange}
                        />
                        <TextField 
                            id="id__province-textfield" 
                            label="Province" 
                            value={attributes.province}
                            variant="outlined" 
                            sx={{
                                paddingBottom: "10px"
                            }}
                            fullWidth
                            onChange={handleProvinceFieldChange}
                        />
                        <TextField 
                            id="id__country-textfield" 
                            label="Country" 
                            value={attributes.country}
                            variant="outlined" 
                            sx={{
                                paddingBottom: "10px"
                            }}
                            fullWidth
                            onChange={handleCountryFieldChange}
                        />
                </Paper>  
            </Grid>
        </Grid>
    );
}