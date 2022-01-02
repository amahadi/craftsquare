import React from "react";

import { 
    Paper, Typography, TextField, Divider, Stack,
    Select, MenuItem, FormControl, InputLabel,
    FormHelperText
} from "@mui/material";

export default function MiscFrom({
    attributes,
    callbacks
}){

    const handleStatusFieldChange = (e) => {
        callbacks.setStatus(e.target.value);
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

    return (
        <Paper
            sx={{
                padding: "20px",
                width: "100%"
            }}
        >
            <Stack>
                <FormControl 
                    fullWidth
                    margin="normal"
                >
                    <InputLabel id="id__productStatus-label" >Status</InputLabel>
                    <Select
                        labelId="id__productStatus-label"
                        id="id__productStatus-textfield" 
                        label="Status"
                        value={attributes.status} 
                        variant="outlined" 
                        fullWidth
                        onChange={handleStatusFieldChange}
                    >
                        <MenuItem value="draft">Draft</MenuItem>
                        <MenuItem value="active">Active</MenuItem>
                    </Select>
                    <FormHelperText>
                        Choose to make the product active. You can save a draft status of the product and come back later to complete from where you left of and make the product active.
                    </FormHelperText>
                </FormControl>
                <Divider />
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