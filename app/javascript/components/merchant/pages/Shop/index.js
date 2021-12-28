import React, { useEffect, useState } from "react";

import ShopList from "./ShopList";
import CreateShop from "./CreateShop";
import UpdateShop from "./UpdateShop";

import { pathName } from "../../../utils";

export default function Shop(){

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

    const [newShop, setNewShop] = useState(isNewPath());
    const [shopId, setShopId] = useState(getIdFromPath());

    if(newShop){
        return <CreateShop />
    }
    else if(shopId){
        return <UpdateShop />
    }
    return (
        <ShopList 
            setNewShop={setNewShop}
            setShopId={setShopId}
        />
    ); 
}