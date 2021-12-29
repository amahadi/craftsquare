import React from "react";

export default function Dashboard(props){
    const merchant = props.merchant;
    const shop = props.shop;
    console.log("merchant", merchant);
    console.log("shop", shop);
    return <h2>Shop dashboard</h2>
}