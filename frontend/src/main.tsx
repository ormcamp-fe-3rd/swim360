import "./styles/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Footer from "./components/home/Footer";
import NavigationMenu from "./components/home/NavigationMenu";
import Router from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavigationMenu />
    <Router />
    <Footer />
  </StrictMode>,
);
