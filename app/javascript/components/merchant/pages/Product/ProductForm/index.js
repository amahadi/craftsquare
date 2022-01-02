import React, { useState, forwardRef,useImperativeHandle } from "react";

import { Box, Grid } from "@mui/material";

import MainForm from "./MainForm";
import MiscFrom from "./MiscForm";

const ProductForm = forwardRef((props, ref) => {

    // const { title } = props;
    // product attributes
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tagList, setTagList] = useState("");
    const [ingredientList, setIngredientList] = useState("");
    const [productTypeList, setProductTypeList] = useState("");
    const [images, setImages] = useState([]);

    const styles = {
        box: {
            display: "block",
            width: "80%",
            margin: "auto"
        }
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
                    images: images
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
            tagList, 
            ingredientList, productTypeList
        }
    }

    const getMiscCallbacks = () => {
        return {
            setTagList,
            setIngredientList, setProductTypeList,
        }
    }

    return (
        <Box style={styles.box}>
            <Grid 
                container
                spacing={2}
            >
                <Grid 
                    item
                    xs={12}
                    md={12}
                    lg={8}
                >
                    <MainForm 
                        attributes={getMainAttributes()}
                        callbacks={getMainCallbacks()}
                    />
                </Grid>
                <Grid 
                    item
                    xs={12}
                    md={12}
                    lg={4}
                >
                    <MiscFrom 
                        attributes={getMiscAttibutes()}
                        callbacks={getMiscCallbacks()}
                    />
                </Grid>
            </Grid>
        </Box>
    );
});

export default ProductForm;
