import React from "react";

import { 
    Paper, Typography, TextField, Divider, Stack
} from "@mui/material";

export default function MiscFrom({
    attributes,
    callbacks
}){

    const handleTagListFieldChange = (e) => {
        callbacks.setTagList(e.target.value);
    }

    const handleIngredientListFieldChange = (e) => {
        callbacks.setIngredientList(e.target.value);
    }

    const handleProductTypeFieldChange = (e) => {
        callbacks.setProductTypeList(e.target.value);
    }

    return (
        <Paper
            sx={{
                padding: "20px",
                width: "100%", 
                marginTop: "10px"
            }}
        >
            <Stack>
                <TextField 
                    id="id__productTypeList-textfield" 
                    label="Product Type"
                    value={attributes.productTypeList} 
                    variant="outlined" 
                    fullWidth
                    margin="normal"
                    helperText="Select a category where your product falls into"
                    onChange={handleProductTypeFieldChange}
                />
                <Divider />
                <TextField 
                    id="id__productIngredientListList-textfield" 
                    label="Ingredient List"
                    value={attributes.ingredientList} 
                    variant="outlined" 
                    fullWidth
                    margin="normal"
                    helperText="List the ingredients of the product. use comma(,) to separate each ingredients."
                    onChange={handleIngredientListFieldChange}
                />
                <Divider />
                <TextField 
                    id="id__productTagListList-textfield" 
                    label="Tag List"
                    value={attributes.tagList} 
                    variant="outlined" 
                    fullWidth
                    margin="normal"
                    helperText="Tag your product here. Use as much tags as you need to describe your product. Use comma(,) to separate each tags."
                    onChange={handleTagListFieldChange}
                />
            </Stack>
        </Paper>
    )
}