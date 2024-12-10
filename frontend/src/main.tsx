import "./styles/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Footer from "./components/home/Footer";
import Header from "./components/home/Header";

import Router from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Router />
    <Footer />
  </StrictMode>,
);
