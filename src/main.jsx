import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Test from "./test.jsx";
import Ex from "./Ex.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Test />
    <Ex />
  </StrictMode>,
);
