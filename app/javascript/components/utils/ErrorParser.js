import React from "react";

import { List, ListItem } from "@mui/material";

export default function({
    errorMessageArray
}){

    return (
        <List>
            {
                errorMessageArray.map((errorMessage) => {
                    return <ListItem>{ errorMessage }</ListItem>
                })
            }
        </List>
    );
}