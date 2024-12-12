import "./styles/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Router from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Router />
    <Footer />
  </StrictMode>,
);
