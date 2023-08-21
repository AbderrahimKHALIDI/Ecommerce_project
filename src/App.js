import React from "react";
import {  Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shope/shope.component";
import Header from "./components/header/header.component";

function App() {
  return (
  <div>
    <Header/>
      <Routes>
        <Route  path="/" Component={HomePage} />
        <Route path="/shop" Component={ShopPage} />
      </Routes>
      </div>
  );
}

export default App;
