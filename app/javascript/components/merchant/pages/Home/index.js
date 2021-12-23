import React, { useState, useEffect } from "react";
import MerchantContext from "../../_contexts/merchantContext";
import Dashboard from "../Dashboard";

import { getJson, CircularLoader } from "../../../utils";


export default function Home(props) {

  const [loading, setLoading] = useState(true);
  const [merchant, setMerchant] = useState(null);

  useEffect(() => {
    if (loading) {
      getJson(
        `${process.env.HOST_NAME}/auth/merchants/validate_token`
      ).then(
        response => {
          console.log(response);
          setMerchant(response);
          setLoading(false);
        },
        error => {
          console.log(error);
          setLoading(false);
        }
      )
    }
  });

  if(loading){
    return <CircularLoader />
  }

  return merchant 
    ?
    <MerchantContext.Provider value={merchant}>
      <Dashboard /> 
    </MerchantContext.Provider> 
    : 
    window.location.assign("/merchant/sign-in")
}