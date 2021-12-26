import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Copyright from '../../_components/Copyright';

import { postJson, getJson, CircularLoader, FlashMessage } from "../../../utils";


const theme = createTheme();

export default function SignIn() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (loading) {
      getJson(
        `${process.env.HOST_NAME}/auth/merchants/validate_token`
      ).then(
        response => {
          console.log(response);
          navigate("/merchant/");
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

  const handleOnSignInButtonClick = () => {
    const body = buildRequestBody();
    postJson(
      `${process.env.HOST_NAME}/auth/merchants/sign_in`,
      body
    )
    .then(
      response => {
        console.log(response);
        navigate("/merchant");
      },
      error => {
        setErrorMessage(error);
        console.log(error);
      }
    )
  }

  return (
    loading ?
      <CircularLoader />
      :
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {
          errorMessage 
          ?
          <FlashMessage 
            type="error"
            errorMessageArray={errorMessage}
          />
          : null 
        }
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
            Sign in
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleEmailFieldChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handlePasswordFieldChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleOnSignInButtonClick}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/merchant/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
