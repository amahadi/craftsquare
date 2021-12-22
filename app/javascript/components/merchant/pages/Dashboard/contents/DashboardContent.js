import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';

// import { mainListItems, secondaryListItems } from './listItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';

import NavBar from './NavBar';
import SideDrawer from './SideDrawer';

export default function DashboardContent() {

  const [open, setOpen] = useState(true);

  const mdTheme = createTheme();

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/** NavBar goes here */}
        <NavBar
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
          {/** Main page content goes after this */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}