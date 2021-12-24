import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Dashboard from "./pages/Dashboard";
import Advert from './pages/Advert';
import Customer from './pages/Customer';
import Order from './pages/Order';
import Product from './pages/Product';
import Report from './pages/Report';
import Shop from './pages/Shop';

export default function MerchantRoutes() {

  return (
    <Router>
      <Routes>
        <Route path='/merchant' element={<Home />} />
        <Route path='/merchant/sign-in' element={<SignIn />} />
        <Route path='/merchant/sign-up' element={<SignUp />} />

        <Route path='/merchant/dashboard' element={<Home />} />
        <Route path='/merchant/adverts' element={<Home />} />
        <Route path='/merchant/customers' element={<Home />} />
        <Route path='/merchant/orders' element={<Home />} />
        <Route path='/merchant/products' element={<Home />} />
        <Route path='/merchant/reports' element={<Home />} />
        <Route path='/merchant/shops' element={<Home />} />

      </Routes>
    </Router>
  );
}