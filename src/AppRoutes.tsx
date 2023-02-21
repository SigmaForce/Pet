import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BasePage } from "./pages/Base/BasePage";
import { Home } from "./pages/Home/Home";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<BasePage />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};
