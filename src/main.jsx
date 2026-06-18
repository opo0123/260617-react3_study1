import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Test from "./test.jsx";
import Ex from "./Ex.jsx";
import Ex_01 from "./Ex_01.jsx";
import Name from "./Name.jsx";
import SelectBox from "./SelectBox.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Test />
    <Ex />
    <Ex_01 />
    <Name />
    <hr />
    <SelectBox />
  </StrictMode>,
);
