import React, { useState, forwardRef, useImperativeHandle } from "react";

import { Box, Grid, Stack } from "@mui/material";

import FormContext from "../../../_contexts/formContext";
import MainForm from "./MainForm";
import MiscFrom from "./MiscForm";
import VariantsForm from "./VariantsForm";

const ProductForm = forwardRef((props, ref) => {

    const variantsObj = {
        title: "",
        description: "",
        weight: "",
        weightUnit: "",
        inventoryQuantity: "",
        price: "",
        ingredientList: "",
        variantOptions: [],
        deleted: false
    }

    // const { title } = props;
    // product attributes
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tagList, setTagList] = useState("");
    const [ingredientList, setIngredientList] = useState("");
    const [productTypeList, setProductTypeList] = useState("");
    const [status, setStatus] = useState("draft");
    const [images, setImages] = useState([]);

    // variant attributes
    const [variants, setVariants] = useState([variantsObj]);

    const styles = {
        box: {
            display: "block",
            width: "80%",
            margin: "auto"
        }
    }

    const getVariantOptions = () => {
        const variantOptionsObj = variantOptions
            .filter(option => !option.deleted)
            .map((option) => {
                return {
                    title: option.title,
                    value_list: option.optionList
                }
            });
        return variantOptionsObj;
    }

    useImperativeHandle(
        ref,
        () => ({
            getFormBody() {
                return {
                    title, description,
                    tag_list: tagList,
                    ingredient_list: ingredientList,
                    product_type_list: productTypeList,
                    images: images,
                    variant_options_attributes: getVariantOptions()
                }
            }
        }),
    );

    const getMainAttributes = () => {
        return {
            title, description,
            images
        }
    }

    const getMainCallbacks = () => {
        return {
            setTitle, setDescription,
            setImages
        }
    }

    const getMiscAttibutes = () => {
        return {
            status, tagList,
            ingredientList, productTypeList
        }
    }

    const getMiscCallbacks = () => {
        return {
            setStatus, setTagList,
            setIngredientList, setProductTypeList,
        }
    }

    const getVariantAttributes = () => {
        return {
            variantTitle, variantDescription, variantWeight,
            variantWeightUnit, variantInventoryQuantity, variantPrice,
            variantIngredientList, variantImages,
            variantOptions
        }
    }

    const getVariantCallbacks = () => {
        return {
            setVariantTitle, setVariantDescription, setVariantWeight,
            setVariantWeightUnit, setVariantInventoryQuantity,
            setVariantPrice, setVariantIngredientList,
            setVariantImages,
            setVariantOptions
        }
    }

    return (
        <FormContext.Provider value={props}>
            <Box style={styles.box}>
                <Stack>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12} lg={8}>
                            <MainForm
                                attributes={getMainAttributes()}
                                callbacks={getMainCallbacks()}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={4}>
                            <Stack>
                                <MiscFrom
                                    attributes={getMiscAttibutes()}
                                    callbacks={getMiscCallbacks()}
                                />
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12} lg={12}>
                            <VariantsForm
                                variants={variants}
                                setVariants={setVariants}
                            />
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
        </FormContext.Provider>
    );
});

export default ProductForm;
