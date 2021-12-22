import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/signIn";

export default function MerchantRoutes() {

  return (
    <Router>
      <Routes>
        <Route path='/merchant' element={<Home />} />
        <Route path='/merchant/home' element={<Home />} />
        <Route path='/merchant/sign-in' element={<SignIn />} />
      </Routes>
    </Router>
  );
}