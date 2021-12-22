import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { getJson, deleteJson } from "../../../utils";

export default function Home() {

  const [merchant, setMerchant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      getJson(
        `${process.env.HOST_NAME}/auth/merchants/validate_token`
      )
        .then(
          response => {
            console.log(response);
            setLoading(false);
          },
          error => {
            console.log(error);
            setLoading(false);
            document.location.href = '/merchant/sign-in';
          }
        )
    }
  })

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

  return (
    <div>
      <h2>
        Merchant home
      </h2>
      <Button
        variant="contained"
        onClick={signOut}
      >
        Sign out
      </Button>
    </div>
  );
}