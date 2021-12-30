import React, { useState } from "react";

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Container } from "@mui/material";

import NavBar from '../../_components/NavBar';
import HomeSideDrawer from '../../_components/HomeSideDrawer';
import Copyright from "../../_components/Copyright";

import MerchantRoutes from "../../MerchantRoutes";


export default function Home(props) {

  const merchant = props.merchant;

  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState("Dashboard");

  const mdTheme = createTheme();

  return (
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          {/** NavBar goes here */}
          <NavBar
            title={title}
            styled={styled}
            open={open}
            theme={mdTheme}
            setOpen={setOpen}
          />
          {/** SideDrawer goes here */}
          <HomeSideDrawer
            styled={styled}
            open={open}
            theme={mdTheme}
            setOpen={setOpen}
            setTitle={setTitle}
          />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              {/** Main content goes here */}
              {/* {mainContent} */}
              <MerchantRoutes 
                merchant={merchant}
              />
              <Copyright />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
  )
}