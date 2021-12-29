import React from "react";
import { Grid, Paper, TextField } from "@mui/material";

export default function MainForm({
    attributes,
    callbacks
})
{
    const handleTitleFieldChange = (e) => {
        callbacks.setTitle(e.target.value);
    }

    const handleDescriptionFieldCHange = (e) => {
        callbacks.setDescription(e.target.value);
    }

    const handleTagListFieldChange = (e) => {
        callbacks.setTagList(e.target.value);
    }

    const handleIngredientListFieldChange = (e) => {
        callbacks.setIngredientList(e.target.value);
    }

    const handleProductTypeFieldChange = (e) => {
        callbacks.setProductTypeList(e.target.value);
    }

    const handleImagesFieldChange = (e) => {
        callbacks.setImages(e.target.value);
    }

    return (
        <Grid 
            container 
            spacing={2}
        >
            <Grid 
                item
                xs={12}
                md={12}
                lg={12}
            >
                <Paper
                    fullWidth
                    sx={{
                        padding: "20px"
                    }}>
                        <TextField 
                            id="id__productTitle-textfield" 
                            label="Title"
                            value={attributes.title} 
                            variant="outlined" 
                            fullWidth
                            onChange={handleNameFieldChange}
                        />
                </Paper>  
            </Grid>
        </Grid>
    );
}