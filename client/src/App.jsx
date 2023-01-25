import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Products from "../pages/Products";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div id="content">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}
