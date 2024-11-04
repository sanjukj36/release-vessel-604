import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/components/ui/themprovider";
import AlarmContext from "@/context/alarm-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light">
      <BrowserRouter>
        <AlarmContext>
          <App />
        </AlarmContext>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
