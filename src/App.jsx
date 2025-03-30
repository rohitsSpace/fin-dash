import React from "react";
import AppLayout from "./components/layout/AppLayout";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./components/gridsystem";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <AppLayout />
    </Router>
  );
};

export default React.memo(App);
