import React from "react";
import { Switch, Route } from "react-router-dom";

/* Components */
import {
  Home,
  Docs,
  Background,
  TokenD,
  Stabilization,
} from "../components/Home";

const AllRoutes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/docs" exact component={Docs} />
    <Route path="/background" exact component={Background} />
    <Route path="/distribution" exact component={TokenD} />
    <Route path="/stabilization" exact component={Stabilization} />
    <Route path="*" exact component={Home} />
  </Switch>
);

export default AllRoutes;
