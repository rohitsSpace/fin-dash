import React from "react";
import AppLayout from "./components/layout/AppLayout";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default React.memo(App);
