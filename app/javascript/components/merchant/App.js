import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import MerchantRoutes from "./MerchantRoutes";


export default function App(props) {

  const merchant = props.merchant;

  return (
    <div>
      {
        merchant
        ?
        <Home
          merchant={merchant}
        />
        :
        <MerchantRoutes />
      }
    </div>
  );

}