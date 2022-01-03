import React, {useState} from "react";
import {Divider, Button, Stack, FormHelperText} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VariantOption from "./VariantOption";

export default function VariantOptions({
    options,
    setOptions
}){

    const [currentIndex, setCurrentIndex] = useState(options.length);

    const handleAddMoreOptionButtonClick = () => {
        setOptions([...options, {
            index: currentIndex,
            title: "",
            optionList: ""
        }])
    }

    return (
        <Stack>
            <Divider />
            {
                options.map((option, index) => (
                    <VariantOption
                        key={index} 
                        option={option}
                        index={index}
                        setOptions={setOptions}
                    />
                ))
            }
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
            <Divider />
            <Button 
                variant="text"
                startIcon={<AddCircleOutlineIcon />}
                onClick={handleAddMoreOptionButtonClick}
            >
                Add more options
            </Button>
        </Stack>
    )
}