import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Profile from "./pages/Profile";

import "./App.css";
import PrivateRoute from "./pages/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div id="content">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:product_id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
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
