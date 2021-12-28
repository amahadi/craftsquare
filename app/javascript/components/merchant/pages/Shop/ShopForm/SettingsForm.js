import React from "react";
import {Grid, Paper, TextField} from "@mui/material";

export default function SettingsForm({
    attributes,
    setCurrency,
    setLanguage,
    setTimeZone
}){

    const handleCurrencyFieldChange = (event) => {
        setCurrency(event.target.value);
    }

    const handleLanguageFieldChange = (event) => {
        setLanguage(event.target.value);
    }

    const handleTimeZoneFieldChange = (event) => {
        setTimeZone(event.target.value);
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
                        <TextField 
                            id="id__currency-textfield" 
                            label="Currency" 
                            value={attributes.currency}
                            variant="outlined" 
                            sx={{
                                paddingBottom: "10px"
                            }}
                            fullWidth
                            onChange={handleCurrencyFieldChange}
                        />
                        <TextField 
                            id="id__language-textfield" 
                            label="Language" 
                            value={attributes.language}
                            variant="outlined" 
                            sx={{
                                paddingBottom: "10px"
                            }}
                            fullWidth
                            onChange={handleLanguageFieldChange}
                        />
                        <TextField 
                            id="id__timeZone-textfield" 
                            label="Time zone" 
                            value={attributes.timeZone}
                            variant="outlined" 
                            sx={{
                                paddingBottom: "10px"
                            }}
                            fullWidth
                            onChange={handleTimeZoneFieldChange}
                        />
                </Paper>  
            </Grid>
        </Grid>
    );
}