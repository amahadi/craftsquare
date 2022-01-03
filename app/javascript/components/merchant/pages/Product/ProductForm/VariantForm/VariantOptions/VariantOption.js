import React, { useState } from "react";

import {
    Grid, TextField, IconButton, Stack, Button
} from "@mui/material";

import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

export default function VariantOption({
    option,
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

    return (
        <Grid container spacing={2} key={`key__variantOption_${option.index}`}>
            <Grid item xs={10} md={5} lg={5}>
                <TextField 
                    id={`id__variantOptionTitle-textfield_${option.index}`} 
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
                    <Button
                        sx={{
                            marginTop: "16px"
                        }}
                        variant="text"
                        onClick={handleOnVariantDoneButton}
                    >
                        Done
                    </Button>
                    :
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
                }
            </Grid>
        </Grid>
    );
}