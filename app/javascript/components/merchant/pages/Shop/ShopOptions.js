import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function ShopOptions(props) {
  const navigate = useNavigate();
  const shop = props.shop;  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };
  
  const handleEditMenuClick = () => {
    navigate(`/merchants/shops/${shop.id}`);
    handleClose();
  }

  const handleHomeButtonClick = () => {
      window.open(`/merchants/shops/${shop.id}/dashboard`, '_blank');
      handleClose();
  }

  const styles = {
      button: {
          margin: "16px"
      }
  }

  return (
    <div>
      <Button
        key={`shop_${shop.id}_options_button`}
        id={`id__shop_${shop.id}_option_button`}
        aria-controls={open ? `shop_${shop.id}_menu` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        style={styles.button}
      >
        Options
      </Button>
      <StyledMenu
        key={`shop_${shop.id}_menu`}
        id={`shop_${shop.id}_menu`}
        MenuListProps={{
            'aria-labelledby': `${props.key}_menu`,
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
            key={`shop_${shop.id}_menu_item_edit`}
            id={`id__shop_${shop.id}_menu_item_edit`}
            // value={`merchant/shops/${shop.id}`}
            href={`merchant/shops/${shop.id}`}
            onClick={handleEditMenuClick} 
            disableRipple
        >
            <EditIcon />
            Edit
        </MenuItem>
        <MenuItem
            key={`shop_${shop.id}_menu_item_shop_home`}
            id={`id__shop_${shop.id}_menu_item_shop_home`}
            value={`merchants/shops/${shop.id}/dashboard`}
            onClick={handleHomeButtonClick} 
            disableRipple
        >
            <HomeIcon />
            Shop home
        </MenuItem>
        {/* <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem> */}
      </StyledMenu>
    </div>
  );
}
