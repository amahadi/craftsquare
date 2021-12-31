import React, { useContext, useState } from 'react';
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

import ShopContext from '../_contexts/shopContext';

export default function ListItems({
  type
}) {

  const shop = useContext(ShopContext);

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
    { title: "Dashboard", href: "/merchants/dashboard" },
    { title: "Shops", href: "/merchants/shops" }
  ]

  const shopListObjects = [
    { title: "Dashboard", href: `/merchants/shops/${shop.id}/dashboard` },
    { title: "Products", href: `/merchants/shops/${shop.id}/products` },
    { title: "Orders", href: `/merchants/shops/${shop.id}/orders` },
    { title: "Adverts", href: `/merchants/shops/${shop.id}/adverts` },
    { title: "Customers", href: `/merchants/shops/${shop.id}/customers` },
    { title: "Reports", href: `/merchants/shops/${shop.id}/reports` }
  ]

  const handleListItemOnClick = (event, index, href) => {
    setSelectedIndex(index);
    window.location.href = href;
  }

  const mainListItems = (
    <div>
      {
        mainListObjects.map((mainListObject, index) => {
          return (
            <ListItemButton
              key={`mainListItem__${index}`}
              onClick={(event) => handleListItemOnClick(event, index, mainListObject.href)}
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

