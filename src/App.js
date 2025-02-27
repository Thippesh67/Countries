import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountriesList from "./htmlFiles/countriesList";
import CountryDetails from "./htmlFiles/countryDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/country/:country" element={<CountryDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
