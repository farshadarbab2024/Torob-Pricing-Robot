import "./App.css";
import Auth from "./pages/Auth";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Panel from "./pages/Panel";
import LaunchRobot from "./pages/LaunchRobot";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Auth />} path="/auth" />
          <Route element={<Panel />} path="/panel" />
          <Route element={<LaunchRobot />} path="launch/robot" />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
