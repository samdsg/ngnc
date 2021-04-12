import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes/AllRoutes";

import ScrollToTopRoute from "./Utils/ScrollToTopRoute";

const App = () => {
  return (
    <Router>
      <ScrollToTopRoute />
      <AllRoutes />
    </Router>
  );
};

export default App;
