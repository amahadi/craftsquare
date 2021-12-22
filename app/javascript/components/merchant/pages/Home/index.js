import React from "react";
import { Button } from "@mui/material";
import { deleteJson } from "../../../utils";

export default function Home() {

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