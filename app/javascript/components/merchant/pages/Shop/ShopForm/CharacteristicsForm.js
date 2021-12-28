import React from "react";
import {Grid, Paper, TextField} from "@mui/material";

export default function CharacteristicsForm({
    attributes,
    setTagList
}){

    const handleTagListFieldChange = (event) => {
        setTagList(event.target.value);
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
                Shop characteristics
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
                            id="id__tagList-textfield" 
                            label="Tags" 
                            value={attributes.tagList}
                            variant="outlined" 
                            fullWidth
                            onChange={handleTagListFieldChange}
                        />
                </Paper>  
            </Grid>
        </Grid>
    );
}