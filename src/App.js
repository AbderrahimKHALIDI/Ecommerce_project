import React from "react";
import {  Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shope/shope.component";


function App() {
  return (
  <div>
      <Routes>
        <Route  path="/" Component={HomePage} />
        <Route path="/shop" Component={ShopPage} />
      </Routes>
      </div>
  );
}

export default App;
