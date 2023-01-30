import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute() {
  const { isUserLoggedIn } = useAuth();

  return isUserLoggedIn ? <Outlet /> : <Navigate to={"/login"} />;
}

export default PrivateRoute;
