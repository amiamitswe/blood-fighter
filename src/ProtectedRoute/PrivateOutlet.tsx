import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateOutlet = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/Login" />;
};

export default PrivateOutlet;
