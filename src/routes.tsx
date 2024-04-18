import React from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  { element: <Login />, path: "/" },
  { element: <Dashboard />, path: "/dashboard" },
];
