import React from "react";

import {
    Grid, Paper, TextField
} from "@mui/material";

export default function GeneralForm({
    attributes,
    callbacks
}){

    const handleFirstNameFieldChange = () => {

    }

    const handleLastNameFieldChange = () => {

    }

    const handleDOBFieldChange = () => {}

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
                General
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
                            id="id__merchant_first_name-textfield" 
                            label="First name"
                            value={attributes.firstName} 
                            variant="outlined" 
                            fullWidth
                            margin="normal"
                            onChange={handleFirstNameFieldChange}
                        />
                        <TextField 
                            id="id__merchant_last_name-textfield" 
                            label="Last name"
                            value={attributes.lastName} 
                            variant="outlined" 
                            fullWidth
                            margin="normal"
                            onChange={handleLastNameFieldChange}
                        />
                        <TextField
                            id="id__merchant_dob-textfield"
                            label="Date of birth"
                            value={attributes.dateOfBirth}
                            variant="outlined" 
                            fullWidth
                            margin="normal"
                            type="date"
                            onChange={handleDOBFieldChange}
                            defaultValue={attributes.dateOfBirth}
                            sx={{ width: 220 }}
                                InputLabelProps={{
                                shrink: true,
                            }}
                        />
                </Paper>  
            </Grid>
        </Grid>
    );
}