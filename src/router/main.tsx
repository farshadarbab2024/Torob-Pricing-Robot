import { createBrowserRouter } from "react-router-dom";
import React from "react" ; 
import Login from "../pages/Login"
import Signup from "../pages/Signup" ; 
import LaunchRobot from "../pages/LaunchRobot" ; 
import Panel from "../pages/Panel";
const router = createBrowserRouter([
    {
        path: "/login", 
        element: <Login />
    }, 
    {
        path: "/signup", 
        element: <Signup />
    }, 
    {
        path: "/robot/launch", 
        element: <LaunchRobot />
    }, 
    {
        path: "/panel", 
        element: <Panel />
    }

]) ; 

export default router ; 