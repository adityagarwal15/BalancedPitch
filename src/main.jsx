import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { Analytics } from "@vercel/analytics/react";
injectSpeedInsights();

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
      <Analytics />
    </Router>
  </HelmetProvider>
);