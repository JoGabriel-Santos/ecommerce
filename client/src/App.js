import React from "react";

import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";

import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
