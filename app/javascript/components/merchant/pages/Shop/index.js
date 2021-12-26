import React, { useEffect } from "react";

import ShopList from "./ShopList";
import ShopDetail from "./ShopDetail";

export default function Shop({
    id = null
}){

    return (
        id ? <ShopDetail /> : <ShopList />
    )
}