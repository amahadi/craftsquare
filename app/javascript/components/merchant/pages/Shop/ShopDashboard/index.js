import React, { useState, useEffect, useContext } from "react";
import MerchantContext from "../../../_contexts/merchantContext";
import ShopContext from "../../../_contexts/shopContext";

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Container } from "@mui/material";

import NavBar from '../../../_components/NavBar';
import ShopSideDrawer from '../../../_components/ShopSideDrawer';

import DashboardContent from "./DashboardContent";
import Product from "../../Product";
import Order from "../../Order";
import Advert from "../../Advert";
import Customer from "../../Customer";
import Report from "../../Report";
import Copyright from "../../../_components/Copyright";

import MerchantRoutes from "../../../MerchantRoutes";

import { pathName } from "../../../../utils";


export default function ShopDashboard(props) {
  
  const merchant = props.merchant;
  const shop = props.shop;  

  const getTitleFromPath = () => {
    try {
      const pathArray = pathName().split("/");
      const len = pathArray.length;
      if (isNaN(pathArray[len - 1])) {
        return pathArray[len - 1] === 'merchant'
          ? null
          : pathArray[len - 1].charAt(0).toUpperCase() + pathArray[len - 1].slice(1);
      } else {
        return pathArray[len - 2] === 'merchant'
          ? null
          : pathArray[len - 2].charAt(0).toUpperCase() + pathArray[len - 2].slice(1);
      }
    } catch {
      return null;
    }
  }

  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState(getTitleFromPath() || "Dashboard");
  const [mainContent, setMainContent] = useState(null);

  const mdTheme = createTheme();

  useEffect(() => {
    let content = getMainContent();
    setMainContent(content);
  }, [title])

  const getMainContent = () => {
    const pathArray = pathName().split("/");
    try{
      if(pathArray.includes('products')) return <Product />; 
      if(pathArray.includes('orders')) return <Order />; 
      if(pathArray.includes('adverts')) return <Advert />; 
      if(pathArray.includes('customers')) return <Customer />; 
      if(pathArray.includes('reports')) return <Report />;
      else return <DashboardContent />;
    } catch {
      return  <DashboardContent />;
    }
  }

  window.addEventListener('popstate', function (event) {
    try {
      setTitle(event.state);
    } catch {
      setTitle('/merchant');
    }
  });

  return (
    <MerchantContext.Provider value={merchant}>
      <ShopContext.Provider value={shop}> 
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
                <MerchantRoutes 
                  merchant={merchant}
                  shop={shop}
                />
                <Copyright />
                </Container>
            </Box>
            </Box>
        </ThemeProvider>
      </ShopContext.Provider> 
    </MerchantContext.Provider>
  )
}