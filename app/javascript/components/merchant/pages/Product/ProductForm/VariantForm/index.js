import React, {useEffect, useState} from "react";

import { 
    Paper, Stack, TextField,
    FormControl, InputLabel, Select, MenuItem, FormHelperText,
    Grid, Divider, IconButton, Button
} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import VariantOption from "./VariantOption";

export default function index({
    attributes,
    callbacks
}){

    const handleVariantTitleFieldChange = () => {

    }

    const handleVariantDescriptionFieldCHange = () => {

    }

    const handleVariantWeightfieldChange = () => {

    }

    const handleVariantWeightUnitfieldChange = () => {

    }

    const handleVariantPricefieldChange = () => {

    }

    const handleVariantIngredientListFieldCHange = () => {

    }

    const handleAddMoreOptionButtonClick = () => {}

    const getWeightUnitComponent = () => {
        return (
            <FormControl 
                style={{marginTop: "16px"}}
                fullWidth
            >
                <InputLabel id="id__variantWightUnit-label" >Weight unit</InputLabel>
                <Select
                    labelId="id__variantWightUnit-label"
                    id="id__variantWeightUnit-textfield" 
                    label="Weight unit"
                    value={attributes.variantWeightUnit} 
                    variant="outlined"
                    onChange={handleVariantWeightUnitfieldChange}
                >
                    <MenuItem value="draft">kg</MenuItem>
                    <MenuItem value="active">lb</MenuItem>
                </Select>
                <FormHelperText>
                    Weight unit used to measure the weight.
                </FormHelperText>
            </FormControl>
        );
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
               <Grid container spacing={2}>
                   <Grid item xs={12} md={6} lg={6}>
                        <TextField 
                            id="id__variantTitle-textfield" 
                            label="Variant title"
                            value={attributes.variantTitle} 
                            variant="outlined" 
                            fullWidth
                            margin="normal"
                            onChange={handleVariantTitleFieldChange}
                            helperText="Set the variant title. For example, a product, shirt, can have variants based on colors. The variant title color goes here."
                        />
                   </Grid>
                   <Grid item xs={12} md={6} lg={6}>
                        <TextField
                            id="id__variantPrice-textfield"
                            label="Price"
                            type="float"
                            value={attributes.variantPrice}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            helperText="Price of the specific variant."
                            onChange={handleVariantPricefieldChange}
                        /> 
                   </Grid>
               </Grid>
                <TextField 
                    id="id__variantDescription-textfield" 
                    label="Variant Description"
                    value={attributes.variantDescription} 
                    variant="outlined" 
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    helperText="Define the variant description. For example, a product, shirt, can have multiple variants based on material. The material description goes here."
                    onChange={handleVariantDescriptionFieldCHange}
                />
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xs={12} md={6} lg={4}>
                        <TextField
                            id="id__variantWeight-textfield"
                            label="Weight"
                            type="float"
                            value={attributes.variantWeight}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            helperText="Weight of the specific variant."
                            onChange={handleVariantWeightfieldChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        {getWeightUnitComponent()}
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <TextField 
                            id="id__variantIngredientList-textfield" 
                            label="Variant Ingredient list"
                            value={attributes.variantIngredientList} 
                            variant="outlined" 
                            fullWidth
                            margin="normal"
                            helperText="List the ingredient list for this specific variant. Leave blank to use from the product ingredients."
                            onChange={handleVariantIngredientListFieldCHange}
                        /> 
                    </Grid>
                </Grid>
                <Divider />
                {
                    attributes.variantOptions.map((option, index) => (
                        <VariantOption 
                            option={option}
                            index={index}
                            setOptions={callbacks.setVariantOptions}
                        />
                    ))
                }
                
                <Button 
                    variant="text"
                    startIcon={<AddCircleOutlineIcon />}
                    onClick={handleAddMoreOptionButtonClick}
                >
                    Add more options
                </Button>    
                <Divider />
           </Stack>
       </Paper> 
    );
}