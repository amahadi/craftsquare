import React, { useEffect, useState } from "react";

import ShopList from "./ShopList";
import CreateShop from "./CreateShop";
import UpdateShop from "./UpdateShop";

export default function Shop(){

    const getIdFromPath = () => {
        try {
            const pathArray = window.location.pathname.replace(/(^\/)|(\/$)/g, "").split("/");
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

    const [newShop, setNewShop] = useState(false);
    const [shopId, setShopId] = useState(getIdFromPath());

    console.log("newShop", newShop);

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