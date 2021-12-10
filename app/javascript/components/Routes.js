import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from "./Home";

export default function Routes(){
    return (
        <Router>
            <Routes>
                <Route path='/'>
                    <Home />
                </Route>
            </Routes>
        </Router>
    );
}