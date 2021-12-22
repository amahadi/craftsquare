import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailFieldChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordFieldChange = (e) => {
    setPassword(e.target.value);
  }

  const handleOnSignInButtonClick = () => {
    console.log({email: email, password: password})
    fetch(
      `${process.env.HOST_NAME}/auth/merchants/sign_in`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          email, password
        })
      }
    ).then((response) => {
      console.log(response.json());
    })
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