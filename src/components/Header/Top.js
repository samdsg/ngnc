import React from "react";
import { withRouter } from "react-router";

/* Compoentns */
import Header from "./Header";

function Top({ match }) {
  const link = match.path;

  return (
    <>
      <Header {...{ link }} />
    </>
  );
}

export default withRouter(Top);
