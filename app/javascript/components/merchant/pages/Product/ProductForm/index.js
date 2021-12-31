import React, { useState, forwardRef,useImperativeHandle } from "react";

import { Box } from "@mui/material";

const ProductForm = forwardRef((props, ref) => {

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
                    title, description
                }
            }
        }),
    );

    const getAttributes = () => {
        return {
            title, description, tagList, 
            ingredientList, productTypeList,
            images
        }
    }

    const getCallbacks = () => {
        setTitle, setDescription, setTagList,
        setIngredientList, setProductTypeList,
        setImages
    }

    return (
        <Box style={styles.box}>
            <h2>Product form</h2>
        </Box>
    );
});

export default ProductForm;
