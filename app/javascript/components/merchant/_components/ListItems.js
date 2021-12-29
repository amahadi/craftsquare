import React, { useState } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton } from '@mui/material';
import List from '@mui/material/List';

import DashboardIcon from '@mui/icons-material/Dashboard';
import ShopIcon from '@mui/icons-material/Shop';
import InventoryIcon from '@mui/icons-material/Inventory'; // product
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt'; // order
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo'; // advert
import AccountBoxIcon from '@mui/icons-material/AccountBox'; // customer
import BarChartIcon from '@mui/icons-material/BarChart'; // report

import { pathName } from '../../utils';


export default function ListItems({
  type,
  setTitle
}) {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const getIcon = (listTitle) => {
    switch (listTitle) {
      case "Dashboard":
        return <DashboardIcon />;
      case "Shops":
        return <ShopIcon />;
      case "Products":
        return <InventoryIcon />;
      case "Orders":
        return <SystemUpdateAltIcon />;
      case "Adverts":
        return <FeaturedVideoIcon />;
      case "Customers":
        return <AccountBoxIcon />;
      case "Reports":
        return <BarChartIcon />;
    }
  }

  const mainListObjects = [
    { title: "Dashboard", href: "/merchant/dashboard" },
    { title: "Shops", href: "/merchant/shops" }
  ]

  const shopListObjects = [
    { title: "Dashboard", href: 'dashboard' },
    { title: "Products", href: 'products' },
    { title: "Orders", href: 'orders' },
    { title: "Adverts", href: 'adverts' },
    { title: "Customers", href: 'customers' },
    { title: "Reports", href: 'reports' }
  ]

  const handleListItemOnClick = (event, index, title, href) => {
    setSelectedIndex(index);
    setTitle(title);
    window.location.assign(href);
  }

  const mainListItems = (
    <div>
      {
        mainListObjects.map((mainListObject, index) => {
          return (
            <ListItemButton
              key={`mainListItem__${index}`}
              onClick={(event) => handleListItemOnClick(event, index, mainListObject.title, mainListObject.href)}
            >
              <ListItemIcon>
                {getIcon(mainListObject.title)}
              </ListItemIcon>
              <ListItemText primary={mainListObject.title} />
            </ListItemButton>
          );
        })
      }
    </div>
  );

  const shopListItems = (
    <div>
      {
        shopListObjects.map((shopListObject, index) => {
          return (
            <ListItemButton
              key={`shopListItem__${index}`}
              onClick={(event) => handleListItemOnClick(event, index, shopListObject.title, shopListObject.href)}
            >
              <ListItemIcon>
                {getIcon(shopListObject.title)}
              </ListItemIcon>
              <ListItemText primary={shopListObject.title} />
            </ListItemButton>
          );
        })
      }
    </div>
  );

  if(type === 'main'){
    return (
      <div>
        <List>{mainListItems}</List>
      </div>
    );   
  }

  else if(type === 'shop'){
    return (
      <div>
        <List>{shopListItems}</List>
      </div>
    ); 
  }

  return (
    <div>
      <List>{mainListItems}</List>
    </div>
  );

}

