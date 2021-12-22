import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

import { postJson } from "../../../utils";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailFieldChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordFieldChange = (e) => {
    setPassword(e.target.value);
  }

  const buildRequestBody = () => {
    return {
      email: email,
      password: password
    }
  }

  const handleOnSignInButtonClick = () => {
    const body = buildRequestBody();
    postJson(
      `${process.env.HOST_NAME}/auth/merchants/sign_in`,
      body
    )
    .then(
      response => {
        console.log(response);
        window.location.href = '/merchant';
      },
      error => {
        console.log(error);
      }
    )
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="outlined-required"
        label="Email"
        onChange={handleEmailFieldChange}
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        onChange={handlePasswordFieldChange}
      />
      <Button
        variant="contained"
        onClick={handleOnSignInButtonClick}
      >
        Sign in
      </Button>
    </Box>
  )
}