import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/providers/store";
import AppRoutes from "./app/router/AppRoutes";
import { ThemeProvider } from "./app/providers/ThemeContext";
import { RegionProvider } from "./app/providers/RegionContext";
import SplashScreen from "./shared/components/SplashScreen";
import ScrollToTop from "./shared/components/ScrollToTop";
import "./app/styles/index.css";
import "./shared/lib/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RegionProvider>
          <SplashScreen />
          <BrowserRouter>
            <ScrollToTop />
            <AppRoutes />
          </BrowserRouter>
        </RegionProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
