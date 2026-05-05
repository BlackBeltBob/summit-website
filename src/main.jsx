import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./ProductPage";
import PrivacyPage from "./PrivacyPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
