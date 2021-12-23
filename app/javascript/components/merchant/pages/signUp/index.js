import React, {useState, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Copyright from '../../_components/Copyright';

import { postJson, getJson, CircularLoader } from "../../../utils";

const theme = createTheme();

export default function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      getJson(
        `${process.env.HOST_NAME}/auth/merchants/validate_token`
      ).then(
        response => {
          console.log(response);
          navigate("/merchant/")
        },
        error => {
          console.log(error);
          setLoading(false);
        }
      )
    }
  });

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = buildRequestBody();
    postJson(
      `${process.env.HOST_NAME}/auth/merchants`,
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
  };

  return (
    loading
    ?
    <CircularLoader />
    :
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleEmailFieldChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handlePasswordFieldChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/merchant/sign-in" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
