import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import MerchantContext from "../../_contexts/merchantContext";
import Dashboard from "../Dashboard";

import { getJson, CircularLoader } from "../../../utils";


export default function Home(props) {

  const [loading, setLoading] = useState(true);
  const [merchant, setMerchant] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      getJson(
        `${process.env.HOST_NAME}/auth/merchants/validate_token`
      ).then(
        response => {
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

  return (
    loading 
    ? 
    <CircularLoader />
    :
    merchant 
    ?
    <MerchantContext.Provider value={merchant}>
      <Dashboard /> 
    </MerchantContext.Provider> 
    : 
    navigate("/merchant/sign-in")
  )
}