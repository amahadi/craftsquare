import React from "react";
import {Grid, Paper, TextField} from "@mui/material";

export default function AddressForm({
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

    const handleLatitudeFetch = (event) => {
        setLatitude(event.target.value);
    }

    const handleLongitudeFetch = (event) => {
        setLongitude(event.target.value);
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
                            variant="outlined" 
                            sx={{
                                width: "100%",
                                paddingBottom: "10px"
                            }}
                            onChange={handleStreetFieldChange}
                        />
                        <TextField 
                            id="id__apartment-textfield" 
                            label="Apartment" 
                            variant="outlined" 
                            sx={{
                                width: "100%",
                                paddingBottom: "10px"
                            }}
                            onChange={handleApartmentFieldChange}
                        />
                        <TextField 
                            id="id__suite-textfield" 
                            label="Suite" 
                            variant="outlined" 
                            sx={{
                                width: "100%",
                                paddingBottom: "10px"
                            }}
                            onChange={handleSuiteFieldChange}
                        />
                        <TextField 
                            id="id__postalCode-textfield" 
                            label="Postal code" 
                            variant="outlined" 
                            sx={{
                                width: "100%",
                                paddingBottom: "10px"
                            }}
                            onChange={handlePostalCodeFieldChange}
                        />
                        <TextField 
                            id="id__city-textfield" 
                            label="City" 
                            variant="outlined" 
                            sx={{
                                width: "100%",
                                paddingBottom: "10px"
                            }}
                            onChange={handleCityFieldChange}
                        />
                        <TextField 
                            id="id__province-textfield" 
                            label="Province" 
                            variant="outlined" 
                            sx={{
                                width: "100%",
                                paddingBottom: "10px"
                            }}
                            onChange={handleProvinceFieldChange}
                        />
                        <TextField 
                            id="id__country-textfield" 
                            label="Country" 
                            variant="outlined" 
                            sx={{
                                width: "100%",
                                paddingBottom: "10px"
                            }}
                            onChange={handleCountryFieldChange}
                        />
                </Paper>  
            </Grid>
        </Grid>
    );
}