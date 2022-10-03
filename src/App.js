import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import Detail from "./components/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "add",
    element: <AddUser />,
  },
  {
    path: "detail/:id",
    element: <Detail />,
  },
]);

export default router;
