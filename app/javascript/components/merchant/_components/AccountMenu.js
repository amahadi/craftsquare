import React, { useState, useContext } from "react";

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import { deleteJson } from "../../utils";
import MerchantContext from "../_contexts/merchantContext";


export default function AccountMenu() {

  const merchant = useContext(MerchantContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOut = () => {
    deleteJson(
      `${process.env.HOST_NAME}/auth/merchants/sign_out`
    ).then(
      response => {
        console.log(response);
        window.location.href = '/merchants/sign-in';
      },
      error => {
        console.log(error);
      }
    )
  }

  const getMerchantInitial = () => {
    const fullName = merchant
      ? `${merchant.first_name ? merchant.first_name : ""} ${merchant.last_name ? merchant.last_name : ""}`
      : null;
    if (fullName && fullName.trim() != "") {
      var initials = fullName.split(' ').map((str) => str ? str[0].toUpperCase() : "").join('');
    }
    else {
      var initials = 'M'
    }
    return initials;
  }

  const handleOnProfileMenuClick = () => {
    window.location.href = '/merchants/profile';
  }

  return (
    <div>
      <Tooltip title="Account settings">
        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
          <Avatar sx={{ width: 32, height: 32 }}>{getMerchantInitial()}</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          onClick={handleOnProfileMenuClick}
        >
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem
          onClick={signOut}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}