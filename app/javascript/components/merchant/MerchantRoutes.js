import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";

export default function MerchantRoutes() {

  return (
    <Router>
      <Routes>
        <Route path='/merchant' element={<Home />} />
        <Route path='/merchant/home' element={<Home />} />
        <Route path='/merchant/sign-in' element={<SignIn />} />
        <Route path='/merchant/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
  );
}