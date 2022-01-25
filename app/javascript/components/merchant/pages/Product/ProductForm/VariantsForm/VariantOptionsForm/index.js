import React, { useState, useEffect, useContext } from "react";
import {
    Grid, Divider, Button, Stack, FormHelperText,
    IconButton, FormControlLabel, Checkbox
} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VariantOptionForm from "./VariantOptionForm";

import FormContext from "../../../../../_contexts/formContext";

export default function VariantOptionsForm({
    variantId,
    options,
    setOptions
}){

    const formContext = useContext(FormContext);
    const [hasOptions, setHasOptions] = useState(options.length > 0);
    const [deletedOptions, setDeletedOptions] = useState([]);

    const optionSchema = {
        title: "",
        optionList: "",
        deleted: false,
        saved: false
    }

    const handleAddMoreOptionButtonClick = () => {
        setOptions([...options, optionSchema])
    }

    const handleDeleteButtonClick = (index) => {
        const tmp = options;
        tmp[index].deleted = true;
        setOptions([...tmp]);
    }

    const handleDoneButtonClick = (optionObj, index) => {
        const tmp = options;
        tmp.splice(index, 1, optionObj);
        setOptions([...tmp]);
    }

    const handleOptionCheckboxChange = () => {

        const currentOptionState = !hasOptions;

        if(!currentOptionState){
            setDeletedOptions(options);
            setOptions([]);
        }

        if (currentOptionState && formContext.type === "new" && options.length === 0) {
            const tmp = deletedOptions.filter(deletedOption => !deletedOption.deleted)
            if(tmp.length === 0){
                setOptions([...options, optionSchema]);
            } else {
                setOptions(tmp);
            }
        }
        else if (currentOptionState && formContext.type === "update" && options.length === 0) {
            const tmp = deletedOptions.filter(deletedOption => !deletedOption.deleted)
            if (tmp.length === 0) {
                setOptions([...options, optionSchema]);
            } else {
                setOptions(tmp);
            }
        }

        setHasOptions(!hasOptions);
    }

    const getOptionComponents = () => {
        return (
            <Stack id="variantOptionsStackContainer">
                {
                    options.map((option, index) => (
                        option.deleted ? "" :
                        <div key={`variantOption_${index}`} id={`variantOptionContainer_${index}`} >
                            <VariantOptionForm
                                variantId={variantId}
                                option={option}
                                index={index}
                                onDoneButtonClick={variantId ? null : handleDoneButtonClick}
                                onDeleteButtonClick={variantId ? null : handleDeleteButtonClick}
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
            <FormControlLabel
                sx={{margin: "20px"}}
                label="This variant has options"
                control={
                    <Checkbox
                        checked={hasOptions}
                        onChange={handleOptionCheckboxChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
            />
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
            {
                hasOptions
                ?
                <>
                    {getOptionComponents()}
                    <Button
                        variant="text"
                        startIcon={<AddCircleOutlineIcon />}
                        onClick={handleAddMoreOptionButtonClick}
                    >
                        Add more options
                    </Button>
                </>
                : null
            }
            <Divider />
        </Stack>
    )
}