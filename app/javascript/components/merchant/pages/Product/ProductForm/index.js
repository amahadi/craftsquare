import React, { useState, forwardRef, useImperativeHandle } from "react";

import { Box, Grid, Stack, Button } from "@mui/material";

import FormContext from "../../../_contexts/formContext";
import MainForm from "./MainForm";
import MiscFrom from "./MiscForm";
import VariantsForm from "./VariantsForm";

const ProductForm = forwardRef((props, ref) => {

    const { product } = props;

    const getVariantsFromProduct = () => {
        if (product) {
            return product.variants.map((variant) => {
                return {
                    id: variant.id,
                    productId: variant.product_id,
                    title: variant.title,
                    description: variant.description,
                    weight: variant.weight,
                    weightUnit: variant.weight_unit,
                    inventoryQuantity: variant.inventory_quantity,
                    price: variant.price,
                    ingredientList: variant.ingredient_list && variant.ingredient_list.join(", ") || [],
                    variant_options: variant.variant_options,
                    deleted: false,
                    saved: true
                }
            })
        } else {
            return [];
        }
    }

    // const { title } = props;
    // product attributes
    const [title, setTitle] = useState(product && product.title || "");
    const [description, setDescription] = useState(product && product.description || "");
    const [tagList, setTagList] = useState(product && product.tag_list && product.tag_list.join(", ") || "");
    const [ingredientList, setIngredientList] = useState(product && product.ingredient_list && product.ingredient_list.join(", ") || "");
    const [productTypeList, setProductTypeList] = useState(product && product.product_type_list && product.product_type_list.join(", ") || "");
    const [status, setStatus] = useState(product && product.status || "draft");
    const [images, setImages] = useState([]);

    // variant attributes
    const [variants, setVariants] = useState(getVariantsFromProduct());

    const styles = {
        box: {
            display: "block",
            width: "80%",
            margin: "auto"
        }
    }

    const getVariants = () => {
        const productVariants = variants
            .filter(variant => !variant.deleted && variant.saved)
            .map((variant) => (
                {
                    title: variant.title,
                    description: variant.description,
                    weight: variant.weight,
                    weight_unit: variant.weightUnit,
                    inventory_quantity: variant.inventoryQuantity,
                    price: variant.price,
                    ingredient_list: variant.ingredientList,
                    variant_options_attributes: variant.variantOptions,
                }
            ));
        return productVariants;
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
                    status: status,
                    images: images,
                    variants_attributes: getVariants()
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
