import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import MerchantContext from "../../_contexts/merchantContext";

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import NavBar from '../../_components/NavBar';
import SideDrawer from '../../_components/SideDrawer';

import Dashboard from "../Dashboard";
import Shop from "../Shop";
import Product from "../Product";
import Order from "../Order";
import Advert from "../Advert";
import Customer from "../Customer";
import Report from "../Report";

import { getJson, CircularLoader } from "../../../utils";


export default function Home(props) {

  const [loading, setLoading] = useState(true);
  const [merchant, setMerchant] = useState(null);
  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState("Dashboard");
  const [mainContent, setMainContent] = useState(<Dashboard />);

  const mdTheme = createTheme();

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      getJson(
        `${process.env.HOST_NAME}/auth/merchants/validate_token`
      ).then(
        response => {
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

  useEffect(() => {
    let content = getMainContent();
    setMainContent(content);
  }, [title])

  const getMainContent = () => {
    if (title === "Dashboard") return <Dashboard />;
    else if (title === "Shops") return <Shop />;
    else if (title === "Products") return <Product />;
    else if (title === "Orders") return <Order />;
    else if (title === "Adverts") return <Advert />;
    else if (title === "Customers") return <Customer />;
    else if (title === "Reports") return <Report />;
  }

  return (
    loading
    ?
    <CircularLoader />
    :
    merchant
    ?
    <MerchantContext.Provider value={merchant}>
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
          <SideDrawer
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
            {/** Main content goes here */}
            {mainContent}
          </Box>
        </Box>
      </ThemeProvider>
    </MerchantContext.Provider>
    :
    navigate("/merchant/sign-in")
  )
}