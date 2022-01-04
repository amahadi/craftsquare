import React, { useState, useEffect } from "react";
import {Grid, Divider, Button, Stack, FormHelperText, IconButton} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VariantOptionForm from "./VariantOptionForm";

export default function VariantOptionsForm({
    options,
    setOptions
}){

    const handleAddMoreOptionButtonClick = () => {
        setOptions([...options, {
            title: "",
            optionList: "",
            deleted: false
        }])
    }

    const handleDeleteButtonClick = (index) => {
        // const optionContainer = document.getElementById("variantOptionsStackContainer");
        // const deletedOption = document.getElementById(`variantOptionContainer_${index}`);
        // optionContainer.removeChild(deletedOption);
        const tmp = options;
        tmp[index].deleted = true;
        setOptions([...tmp]);
    }

    const handleDoneButtonClick = (optionObj, index) => {
        const tmp = options;
        tmp.splice(index, 1, optionObj);
        setOptions([...tmp]);
    }

    const getOptionComponents = () => {
        return (
            <Stack id="variantOptionsStackContainer">
                {
                    options.map((option, index) => (
                        option.deleted ? null :
                        <div key={`variantOption_${index}`} id={`variantOptionContainer_${index}`} >
                            <VariantOptionForm
                                option={option}
                                index={index}
                                onDoneButtonClick={handleDoneButtonClick}
                                onDeleteButtonClick={handleDeleteButtonClick}
                            />
                        </div>
                    ))
                }
            </Stack>
        );
    }

    return (
        <Stack id="variantOptionsContainer">
            <Divider />
            {getOptionComponents()}
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
            <Button
                variant="text"
                startIcon={<AddCircleOutlineIcon />}
                onClick={handleAddMoreOptionButtonClick}
            >
                Add more options
            </Button>
            <Divider />
        </Stack>
    )
}