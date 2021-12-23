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
        <Route path='/merchant/home' element={<Home />} />
        <Route path='/merchant/dashboard' element={<Dashboard /> } />
        <Route path='/merchant/adverts' element={<Advert /> } />
        <Route path='/merchant/customers' element={<Customer /> } />
        <Route path='/merchant/orders' element={<Order /> } />
        <Route path='/merchant/products' element={<Product /> } />
        <Route path='/merchant/reports' element={<Report /> } />
        <Route path='/merchant/shops' element={<Shop /> } />
        <Route path='/merchant/sign-in' element={<SignIn />} />
        <Route path='/merchant/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
  );
}