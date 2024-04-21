
// import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import SignIn from "./Components/pages/SignIn";
import SignUp from "./Components/pages/SignUp";
import AppNavbar from "./Components/common/AppNavbar"

const App = () => {
  return (
    <Router>
      <div>
        <AppNavbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;