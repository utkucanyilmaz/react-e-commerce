import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AdminRoute() {
  const { isUserLoggedIn, user } = useAuth();

  return isUserLoggedIn && user.role === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} />
  );
}

export default AdminRoute;
