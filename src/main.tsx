import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProviders } from "./components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>
);
