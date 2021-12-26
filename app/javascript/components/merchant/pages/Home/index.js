import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import MerchantContext from "../../_contexts/merchantContext";
import ToastContext from "../../_contexts/ToastContext";

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Container } from "@mui/material";

import NavBar from '../../_components/NavBar';
import SideDrawer from '../../_components/SideDrawer';

import Dashboard from "../Dashboard";
import Shop from "../Shop";
import Product from "../Product";
import Order from "../Order";
import Advert from "../Advert";
import Customer from "../Customer";
import Report from "../Report";
import Copyright from "../../_components/Copyright";

import { getJson, CircularLoader } from "../../../utils";


export default function Home(props) {

  const setToast = useContext(ToastContext);

  const getIdFromPath = () => {
    try {
      const pathArray = window.location.pathname.replace(/(^\/)|(\/$)/g, "").split("/");
      const len = pathArray.length;
      if (isNaN(pathArray[len - 1])) {
        return null;
      } else {
        return pathArray[len - 1];
      }
    } catch {
      console.log("exception caught!")
      return null;
    }
  }

  const getTitleFromPath = () => {
    try {
      const pathArray = window.location.pathname.replace(/(^\/)|(\/$)/g, "").split("/");
      const len = pathArray.length;
      if (isNaN(pathArray[len - 1])) {
        return pathArray[len - 1] === 'merchant'
          ? null
          : pathArray[len - 1].charAt(0).toUpperCase() + pathArray[len - 1].slice(1);
      } else {
        return pathArray[len - 2] === 'merchant'
          ? null
          : pathArray[len - 2].charAt(0).toUpperCase() + pathArray[len - 1].slice(1);
      }
    } catch {
      return null;
    }
  }

  const [loading, setLoading] = useState(true);
  const [merchant, setMerchant] = useState(null);
  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState(getTitleFromPath() || "Dashboard");
  const [resourceId, setResourceId] = useState(getIdFromPath());
  const [mainContent, setMainContent] = useState(null);

  const mdTheme = createTheme();

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      getJson(
        `${process.env.HOST_NAME}/auth/merchants/validate_token`
      ).then(
        response => {
          setToast({
            type: "success",
            message: "Logged in successfully"
          })
          setMainContent(getMainContent());
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
    else if (title === "Shops") return <Shop id={resourceId}/>;
    else if (title === "Products") return <Product />;
    else if (title === "Orders") return <Order />;
    else if (title === "Adverts") return <Advert />;
    else if (title === "Customers") return <Customer />;
    else if (title === "Reports") return <Report />;
  }

  window.addEventListener('popstate', function (event) {
    try {
      setTitle(event.state);
    } catch {
      setTitle('/merchant');
    }
  });

  return (
    loading || !mainContent
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
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              {/** Main content goes here */}
              {mainContent}
              <Copyright />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </MerchantContext.Provider>
    :
    navigate("/merchant/sign-in")
  )
}