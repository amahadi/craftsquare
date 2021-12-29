import React, { useState } from "react";
import PageHeader from "../../../_components/PageHeader";

export default function ProductForm({
    product=null
})
{
    // product attributes
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tagList, setTagList] = useState("");
    const [ingredientList, setIngredientList] = useState("");
    const [productTypeList, setProductTypeList] = useState("");
    const [images, setImages] = useState([]);

    const createNewProduct = () => {}

    const updateProduct = () => {}

    const handleSaveButtonClick = () => {
        if(product){

        } else {

        }
    }

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
        <PageHeader 
            pageType={"new"}
            resourceName={"Product"}
            handleSaveButtonClick={handleSaveButtonClick}
        />
    );
}