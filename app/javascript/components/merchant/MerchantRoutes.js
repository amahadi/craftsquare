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
import Profile from "./pages/Profile";
import ShopDashboard from "./pages/Shop/ShopDashboard";
import ShopList from "./pages/Shop/ShopList";
import CreateShop from "./pages/Shop/CreateShop";
import UpdateShop from "./pages/Shop/UpdateShop";

import Product from "./pages/Product";
import CreateProduct from "./pages/Product/CreateProduct";

import Order from "./pages/Order";
import Advert from "./pages/Advert";
import Customer from "./pages/Customer";
import Report from "./pages/Report";


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
            {/** Shop routes */}
            <Route path='/merchants/shops/' element={<ShopList />} />
            <Route path='/merchants/shops/new' element={<CreateShop />} />
            <Route path='/merchants/shops/:id' element={<UpdateShop />} />
            
            {/** Merchant profile routes */}
            <Route path='merchants/profile' element={<Profile />} />

            {/** Shop dashboard routes */}
            <Route path='/merchants/shops/:id/dashboard' element={<ShopDashboard />} />
            {/** Product routes */}
            <Route path='/merchants/shops/:id/products' element={<Product />} />
            <Route path='/merchants/shops/:id/products/new' element={<CreateProduct />} />
            {/** Order routes */}
            <Route path='/merchants/shops/:id/orders' element={<Order />} />
            {/** Advert routes */}
            <Route path='/merchants/shops/:id/adverts' element={<Advert />} />
            {/** Customer routes */}
            <Route path='/merchants/shops/:id/customers' element={<Customer />} />
            {/** Report routes */}
            <Route path='/merchants/shops/:id/reports' element={<Report />} />
              
          </Routes>
        </Router>
      </ShopContext.Provider>
    </MerchantContext.Provider>
  );
}