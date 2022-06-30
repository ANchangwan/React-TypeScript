import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
export const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

export const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
