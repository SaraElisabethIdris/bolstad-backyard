import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import { AuthProvider } from "./components/AuthProvider.tsx";
import { ToastContainer } from "react-toastify";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <AuthProvider>
        <App />
        <ToastContainer />
      </AuthProvider>
    </StrictMode>,
  );
} else {
  throw new Error("Root element not found");
}
