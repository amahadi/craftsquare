import React, { useEffect, useState } from "react";
import {Grid, Paper, TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { getJson } from "../../../../utils";

export default function SettingsForm({
    attributes,
    setCurrency,
    setLanguage,
    setTimeZone
}){

    const [utilitiesLoading, setUtilitiesLoading] = useState(true);
    const [currencyOptions, setCurrencyOptions] = useState([]);
    const [languageOptions, setLanguageOptions] = useState([]);
    const [timezoneOptions, setTimezoneOptions] = useState([]);

    useEffect(() => {
        if(utilitiesLoading){
            Promise.all([
                getJson(`${process.env.HOST_NAME}/utilities/currencies`),
                getJson(`${process.env.HOST_NAME}/utilities/languages`),
                getJson(`${process.env.HOST_NAME}/utilities/timezones`)
            ])
            .then(
                response => {
                    setCurrencyOptions(response[0] && response[0].data);
                    setLanguageOptions(response[1] && response[1].data);
                    setTimezoneOptions(response[2] && response[2].data);
                    setUtilitiesLoading(false);
                },
                error => {
                    console.log(error);
                }
            )
            .catch((e) => console.log(e));
        }
    })

    const handleCurrencyFieldChange = (event) => {
        setCurrency(event.target.value);
    }

    const handleLanguageFieldChange = (event) => {
        setLanguage(event.target.value);
    }

    const handleTimeZoneFieldChange = (event) => {
        console.log(event.target.value);
        setTimeZone(event.target.value);
    }

    const getCurrencyOptions = () => {
        return currencyOptions.map((currencyOption, index) => {
            return (
                <MenuItem
                    key={`menuItem__currencyOptions__${index}`} 
                    value={currencyOption.cc}
                >
                    {`${currencyOption.cc} (${currencyOption.name})`}
                </MenuItem>
            );
        })
    }

    const getLanguageOptions = () => {
        return languageOptions.map((languageOption, index) => {
            return (
                <MenuItem
                    key={`menuItem__languageOptions__${index}`} 
                    value={languageOption.code}
                >
                    {`${languageOption.name} (${languageOption.native})`}
                </MenuItem>
            );
        })
    }

    const getTimezoneOptions = () => {
        return timezoneOptions.map((timezoneOption, index) => {
            return (
                <MenuItem
                    key={`menuItem__timezoneOptions__${index}`} 
                    value={timezoneOption.abbr || ""}
                >
                    {`${timezoneOption.text}`}
                </MenuItem>
            );
        })
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
                Shop settings
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
                        <FormControl fullWidth>
                            <InputLabel id="currency_selectbox_label">Currency</InputLabel>
                            <Select
                                id="id__currency-textfield"
                                labelId="currency_selectbox_label" 
                                label="Currency" 
                                value={attributes.currency}
                                sx={{
                                    marginBottom: "10px"
                                }}
                                fullWidth
                                onChange={handleCurrencyFieldChange}
                            >
                                {getCurrencyOptions()}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="language_selectbox_label">Language</InputLabel>
                            <Select
                                id="id__language-textfield"
                                labelId="language_selectbox_label" 
                                label="Language" 
                                value={attributes.language}
                                sx={{
                                    marginBottom: "10px"
                                }}
                                fullWidth
                                onChange={handleLanguageFieldChange}
                            >
                                {getLanguageOptions()}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="timezone_selectbox_label">Timezone</InputLabel>
                            <Select
                                id="id__timezone-textfield"
                                labelId="timezone_selectbox_label" 
                                label="Timezone" 
                                value={attributes.timeZone}
                                sx={{
                                    marginBottom: "10px"
                                }}
                                fullWidth
                                onChange={handleTimeZoneFieldChange}
                            >
                                {getTimezoneOptions()}
                            </Select>
                        </FormControl>
                </Paper>  
            </Grid>
        </Grid>
    );
}