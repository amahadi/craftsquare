import React, { useEffect, useState } from "react";

import ProductList from "./ProductList";
import CreateProduct from "./CreateProduct";
import UpdateProduct from "./UpdateProduct";

import { pathName } from "../../../utils";

export default function Product(){

    const pathArray = pathName().split("/");

    const getIdFromPath = () => {
        try {
            const len = pathArray.length;
            if (isNaN(pathArray[len - 1])) {
            return null;
            } else {
            return pathArray[len - 1];
            }
        } catch {
            console.log("exception caught!")
            return null;
        }
    }

    const isNewPath = () => {
        try {
            const len = pathArray.length;
            return pathArray[len-1] === "new";
        } catch {
            return false;
        }
    }

    const [newProduct, setNewProduct] = useState(isNewPath());
    const [productId, setProductId] = useState(getIdFromPath());

    useEffect(() => {
        setNewProduct(isNewPath());
        setProductId(getIdFromPath());
    }, [window.location.href])

    if(newProduct){
        return <CreateProduct />
    }
    else if(productId){
        return <UpdateProduct id={productId}/>
    }
    return (
        <ProductList 
            setNewProduct={setNewProduct}
            setProductId={setProductId}
        />
    ); 
}