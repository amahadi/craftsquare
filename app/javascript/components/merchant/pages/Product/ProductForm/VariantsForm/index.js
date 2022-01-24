import React, { useState, useContext } from "react";
import { Grid, Stack, Checkbox, Button, FormControlLabel } from "@mui/material";

import FormContext from "../../../../_contexts/formContext";
import VariantForm from "./VariantForm";


export default function VariantsForm({
    variants,
    setVariants
}) {

    const formContext = useContext(FormContext);
    const [hasVariants, setHasVariants] = useState(variants.length > 0);
    const [deletedVariants, setDeletedVariants] = useState([]);

    const variantSchema = {
        id: null,
        title: "",
        description: "",
        weight: "",
        weightUnit: "",
        inventoryQuantity: "",
        price: "",
        ingredientList: "",
        variantOptions: [],
        deleted: false,
        saved: false
    }

    const handleAddMoreButtonClick = () => {
        setVariants([...variants, variantSchema])
    }

    const handleVariantCheckboxChange = () => {
        const currentVariantState = !hasVariants;

        if (!currentVariantState) {
            setDeletedVariants(variants);
            setVariants([]);
        }

        if (currentVariantState && formContext.type === "new" && variants.length === 0) {
            const tmp = deletedVariants.filter(deletedVariant => !deletedVariant.deleted)
            if (tmp.length === 0) {
                setVariants([...variants, variantSchema]);
            } else {
                setVariants(tmp);
            }
        }

        setHasVariants(!hasVariants);
    }

    const handleEditButtonClick = () => {}

    const handleDeleteButtonClick = (index) => {
        const tmp = variants;
        tmp[index].deleted = true;
        setVariants([...variants])
    }

    const handleDoneButtonClick = (variantObj, index) => {
        const tmp = variants;
        tmp.splice(index, 1, variantObj);
        setVariants([...tmp]);
    }

    return (
        <Stack>
            <FormControlLabel
                sx={{margin: "20px"}}
                label="This product has variants"
                control={
                    <Checkbox
                        checked={hasVariants}
                        onChange={handleVariantCheckboxChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
            />
            {
                hasVariants
                    ?
                    <Grid container spacing={2}>
                        {
                            variants.map((variant, index) => (
                                variant.deleted ? ""
                                :
                                <Grid
                                    key={`GridItem__variant__${index}`}
                                    item
                                    xs={12} md={12} lg={12}>
                                    <VariantForm
                                        variant={variant}
                                        index={index}
                                        onEditButtonClick={handleEditButtonClick}
                                        onDeleteButtonClick={handleDeleteButtonClick}
                                        onDoneButtonClick={handleDoneButtonClick}
                                    />
                                </Grid>
                            ))
                        }
                        <Grid
                            container
                            spacing={2}
                            alignContent="flex-end"
                            sx={{margin: "auto"}}
                        >
                            <Grid item xs={12} md={6} lg={4}>
                                <Stack direction="row" justifyContent="start">
                                    <Button
                                        variant="outlined"
                                        onClick={handleAddMoreButtonClick}
                                    >
                                        Add more variants
                                    </Button>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}></Grid>
                            <Grid item xs={12} md={6} lg={4}></Grid>
                        </Grid>
                    </Grid>
                    : null
            }

        </Stack>
    )
}