import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CustomApolloProvider from "@services/apollo-client/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomApolloProvider>
      <App />
    </CustomApolloProvider>
  </StrictMode>
);
