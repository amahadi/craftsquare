import React, { useState, useEffect } from "react";
import MerchantRoutes from "./MerchantRoutes";

import MerchantContext from "./_contexts/merchantContext";

import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import { getJson, CircularLoader } from "../utils";

export default function App(props) {

  const [merchant, setMerchant] = useState(props.merchant);
  const [loading, setLoading] = useState(true);

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

  const signUpRequest = () => {
    return document.location.pathname === '/merchant/sign-up';
  }

  return (
    <div>
      {
        loading ?
          <CircularLoader />
          :
          signUpRequest() ?
            <SignUp />
            :
            merchant ?
              <MerchantContext.Provider value={merchant}>
                <MerchantRoutes />
              </MerchantContext.Provider>
              :
              <SignIn />
      }
    </div>
  );

}