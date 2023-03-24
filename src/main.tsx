import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";

import { AppRoutes } from "./AppRoutes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppRoutes />
    Ola
  </React.StrictMode>
);
