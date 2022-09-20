import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cocktail from "./pages/cocktail";
import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useSelector } from "react-redux";

const App = () => {
  const { c } = useSelector((state) => state.custom);

  return (
    <div>
      <BrowserRouter>
        <h1>{c}</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktail:id" element={<Cocktail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
