import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BasePage } from "./pages/Base/BasePage";
import { Home } from "./pages/Home/Home";
import { Landing } from "./pages/LadingPage/Landing";
import { Login } from "./pages/Login";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<BasePage />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};
