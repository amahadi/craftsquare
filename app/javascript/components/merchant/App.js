import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import MerchantRoutes from "./MerchantRoutes";
import { ToastContextProvider } from "./_contexts/ToastContext";

export default function App(props) {

  const merchant = props.merchant;

  return (
    <ToastContextProvider>
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
    </ToastContextProvider>
  );

}