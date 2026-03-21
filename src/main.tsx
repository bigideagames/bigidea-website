import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/globals.css";
import App from "@/App";

// Wait for fonts to load before showing page (prevents FOUT)
document.fonts.ready.then(() => {
  document.body.classList.add("fonts-ready");
});
// Safety timeout — show page after 2s regardless
setTimeout(() => {
  document.body.classList.add("fonts-ready");
}, 2000);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
