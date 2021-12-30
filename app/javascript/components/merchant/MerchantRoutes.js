import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import MerchantContext from "./_contexts/merchantContext";
import ShopContext from "./_contexts/shopContext";

import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import ShopDashboard from "./pages/Shop/ShopDashboard";
import Product from "./pages/Product";
import ShopList from "./pages/Shop/ShopList";
import CreateShop from "./pages/Shop/CreateShop";
import UpdateShop from "./pages/Shop/UpdateShop";


export default function MerchantRoutes(props) {

  const merchant = props.merchant || null;
  const shop = props.shop || null;

  return (
    <MerchantContext.Provider value={merchant}>
      <ShopContext.Provider value={shop}>
        <Router>
          <Routes>

            <Route path='/merchants/sign-in' element={<SignIn />} />
            <Route path='/merchants/sign-up' element={<SignUp />} />

            <Route path='/merchants' element={<Dashboard />} />
            <Route path='/merchants/dashboard' element={<Dashboard />} />
            <Route path='/merchants/shops/' element={<ShopList />} />
            <Route path='/merchants/shops/new' element={<CreateShop />} />
            <Route path='/merchants/shops/:id' element={<UpdateShop />} />

            {/** Shop dashboard routes */}
            <Route path='/merchants/shops/:id/dashboard' element={<ShopDashboard />} />
            <Route path='/merchants/shops/:id/products' element={<Product />} />
              
          </Routes>
        </Router>
      </ShopContext.Provider>
    </MerchantContext.Provider>
  );
}