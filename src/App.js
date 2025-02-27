import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CountriesList from "./htmlFiles/countriesList";
import CountryDetails from "./htmlFiles/countryDetails";
import Login from "./htmlFiles/login";
import Register from "./htmlFiles/register";

const App = () => {

  const isAuthenticated = localStorage.getItem("loggedInUser"); // Check if user is logged in
console.log("isAunthenticated", isAuthenticated)
  return (
    <Router>
      <Routes>
        <Route path="/country/:country" element={<CountryDetails />} />
        <Route path="/" element={isAuthenticated ? <CountriesList /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/countriesList" element={isAuthenticated ? <CountriesList /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
