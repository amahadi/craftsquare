import React, { useState, useEffect, useContext } from "react";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Container } from "@mui/material";

import NavBar from '../../_components/NavBar';
import ShopSideDrawer from '../../_components/ShopSideDrawer';

import ShopContext from "../../_contexts/shopContext";
import { ToastContextProvider } from "../../_contexts/ToastContext";
import Copyright from "../../_components/Copyright";
import MerchantRoutes from "../../MerchantRoutes";

export default function ShopHome(props) {

  const merchant = props.merchant;
  const shop = props.shop;

  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState(shop.name);
  const mdTheme = createTheme();

  return (
    <ShopContext.Provider value={shop}>
        <ToastContextProvider>
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
                <ShopSideDrawer
                    styled={styled}
                    open={open}
                    theme={mdTheme}
                    setOpen={setOpen}
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
                    <MerchantRoutes
                        merchant={merchant}
                        shop={shop}
                    />
                    <Copyright />
                    </Container>
                </Box>
                </Box>
            </ThemeProvider>
        </ToastContextProvider>
    </ShopContext.Provider>
  )
}