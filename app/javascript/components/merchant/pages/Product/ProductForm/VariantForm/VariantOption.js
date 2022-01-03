import React, { useState } from "react";

import {
    Grid, TextField, IconButton, Stack, Divider,
    FormHelperText, Button
} from "@mui/material";

import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

export default function VariantOption({
    option,
    index,
    setOptions
}){

    const [editMode, setEditMode] = useState(option.id ? false : true);

    const handleVariantOptionTitleFieldChange = () => {

    }

    const handleVariantOptionValueListFieldChange = () => {

    }

    const handleOnVariantDoneButton = () => {
        setEditMode(false);
    }

    const handleVariantOptionEditButton = () => {
        setEditMode(true);
    }

    const createOptionComponent = (option, index) => (
        <Grid container spacing={2} key={`key__variantOption_${index}`}>
            <Grid item xs={10} md={5} lg={5}>
                <TextField 
                    id={`id__variantOptionTitle-textfield_${index}`} 
                    label="Variant Option title"
                    value={option.title} 
                    variant="outlined" 
                    fullWidth
                    margin="normal"
                    onChange={handleVariantOptionTitleFieldChange}
                />
            </Grid>
            <Grid item xs={11} md={5} lg={5}>
                <TextField 
                    id="id__variantOptionValueList-textfield" 
                    label="Variant Option list"
                    value={option.optionList} 
                    variant="outlined" 
                    fullWidth
                    margin="normal"
                    onChange={handleVariantOptionValueListFieldChange}
                />
            </Grid>
            <Grid item xs={2} md={2} ls={2}>
                {
                    editMode
                    ?
                    <Stack 
                        direction="row"
                        style={{
                            marginTop: "16px",
                            marginLeft: "-16px" 
                        }}
                    >
                        <IconButton
                            aria-label="Edit"
                            size="large"
                            onClick={handleVariantOptionEditButton}
                        >
                            <EditRoundedIcon />
                        </IconButton>
                        <IconButton
                            aria-label="Delete"
                            size="large"
                        >
                            <DeleteRoundedIcon />
                        </IconButton>
                    </Stack>
                    :
                    <Button
                        sx={{
                            marginTop: "16px"
                        }}
                        variant="text"
                        onClick={handleOnVariantDoneButton}
                    >
                        Done
                    </Button>
                }
            </Grid>
        </Grid>
    );

    return (
        <Stack>
            <Divider />
            {/** This will me wrapped in for loop */}
            {
                createOptionComponent(option, index)
            }
            {/** This will me wrapped in for loop */}
            <FormHelperText>
                {
                    "List the different options available for a specific variant.\
                    For ex. a product, shirt, can have multiple variants depending \
                    on the colors and one color can have various sizes available to \
                    purchase. Here, 'size' is the variant title and 'xs, s, m, l, xl' \
                    is the variant value list. Separate each option in the option list \
                    with a comma(,)."
                }
            </FormHelperText>
        </Stack>
    );
}