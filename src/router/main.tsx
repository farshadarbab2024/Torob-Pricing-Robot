import { createBrowserRouter, useNavigate } from "react-router-dom";
import React from "react";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import LaunchRobot from "../pages/LaunchRobot";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import DesktopPanel from "../Layout/DesktopPanel";
import { redirect } from "react-router-dom";
import Auth from "../services/Auth";
const loginCheck = async () => {
  try {
    const response = await Auth.Me();
    if (response.token == "") {
      return null;
    } else {
      return redirect("/panel/dashboard");
    }
  } catch (error) {
    return null;
  }
};

const router = createBrowserRouter([
  {
    path: "/login",
    loader: loginCheck,
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/robot/launch",
    element: <LaunchRobot />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/panel",
    element: <DesktopPanel />,
    children: [
      {
        path: "dashboard/",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
