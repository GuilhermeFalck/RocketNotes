import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";

import { MyContext } from "./myContext";

import theme from "./styles/theme";

import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MyContext.Provider
        value={{ name: "Guilherme Falck", email: "guilherme@gmail.com" }}
      >
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);
