import React, { useState, useEffect } from "react";
import MerchantRoutes from "./MerchantRoutes";

import MerchantContext from "./_contexts/merchantContext";

export default function App(props) {

  const signUpRequest = () => {
    return document.location.pathname === '/merchant/sign-up';
  }

  return (
    <div>
      <MerchantRoutes />
    </div>
  );

}