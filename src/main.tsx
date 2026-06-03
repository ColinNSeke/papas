import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./globals.css";

document.documentElement.classList.add("dark");
document.documentElement.lang = "de";
document.body.className =
  "bg-surface text-on-surface font-body-md selection:bg-secondary-container selection:text-white";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
