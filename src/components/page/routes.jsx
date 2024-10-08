import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./header";
import { Login } from "../Login";
import {Footer} from "./footer"
import { Home } from "./home";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" elements={<Home/>}/>
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        
      </Routes>
    </BrowserRouter>
  );
};
