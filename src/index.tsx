import React from "react";
import ReactDOM from "react-dom/client";
import App3 from "./App3";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App3 />
    </ThemeProvider>
  </React.StrictMode>
);
