import React, { useContext } from "react";
import { Button } from "@mui/material";
import { deleteJson } from "../../../utils";
import MerchantContext from "../../_contexts/merchantContext";
import Dashboard from "../Dashboard";
import SignIn from "../signIn";


export default function Home() {

  const merchant = useContext(MerchantContext);

  const signOut = () => {
    deleteJson(
      `${process.env.HOST_NAME}/auth/merchants/sign_out`
    ).then(
      response => {
        console.log(response);
        window.location.href = '/merchant/sign-in';
      },
      error => {
        console.log(error);
      }
    )
  }

  return merchant ? <Dashboard /> : <SignIn />
}