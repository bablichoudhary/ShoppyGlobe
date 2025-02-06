import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import appStore from "./store/appStore";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
