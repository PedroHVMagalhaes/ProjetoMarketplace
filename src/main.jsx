import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import Pay from "./views/Pay/Pay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
