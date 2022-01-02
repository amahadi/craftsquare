import React, {useState} from "react";

import { 
    Paper, Stack, TextField,
    FormControl, InputLabel, Select, MenuItem, FormHelperText,
    Grid, Divider, IconButton, Button
} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

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

    const handleVariantOptionTitleFieldCHange = () => {

    }

    const handleVariantOptionValueListFieldCHange = () => {

    }

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

    const optionComponent = (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
                <TextField 
                    id="id__variantOptionTitle-textfield" 
                    label="Variant Option title"
                    value={attributes.variantOptionTitle} 
                    variant="outlined" 
                    fullWidth
                    margin="normal"
                    onChange={handleVariantOptionTitleFieldCHange}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <TextField 
                    id="id__variantOptionValueList-textfield" 
                    label="Variant Option list"
                    value={attributes.variantOptionValueList} 
                    variant="outlined" 
                    fullWidth
                    margin="normal"
                    onChange={handleVariantOptionValueListFieldCHange}
                />
            </Grid>
        </Grid>
    );

    const getOptionComponent = () => {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12}>
                    <Divider />
                </Grid>

                {/** This will me wrapped in for loop */}
                <Grid item xs={12} md={10} lg={10}>
                    {optionComponent}
                </Grid>
                {/** This will me wrapped in for loop */}
                <Grid item xs={12} md={2} lg={2}>
                    <IconButton
                        color="success"
                        aria-label="Add more options"
                        size="large"
                        style={{
                        marginTop: "16px",
                        marginLeft: "16px" 
                        }}
                    >
                        <AddCircleOutlineIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <FormHelperText>
                        List the different options available for a specific variant. For ex. a product, shirt, can have multiple variants depending on the colors and one color can have various sizes available to purchase. Here, 'size' is the variant title and 'xs, s, m, l, xl' is the variant value list.
                    </FormHelperText>
                    <Divider />
                </Grid>
            </Grid>
        );
    }

    const [OptionComponents, setOptionComponent] = useState([getOptionComponent()])

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
                    id="id__variantTitle-textfield" 
                    label="Variant title"
                    value={attributes.variantTitle} 
                    variant="outlined" 
                    fullWidth
                    margin="normal"
                    onChange={handleVariantTitleFieldChange}
                    helperText="Set the variant title. For example, a product, shirt, can have variants based on colors. The variant title color goes here."
                />
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
                    <Grid item xs={12} md={12} lg={4}>
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
                    id="id__variantIngredientList-textfield" 
                    label="Variant Ingredient list"
                    value={attributes.variantIngredientList} 
                    variant="outlined" 
                    fullWidth
                    margin="normal"
                    helperText="List the ingredient list for this specific variant. Leave blank to use from the product ingredients."
                    onChange={handleVariantIngredientListFieldCHange}
                />
                {getOptionComponent()}

                <Button 
                    variant="contained"
                    sx={{
                        marginTop: "16px"
                    }}
                >
                    Add more variants
                </Button>
           </Stack>
       </Paper> 
    );
}