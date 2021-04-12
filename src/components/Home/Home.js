import React, { Component } from "react";
import {Helmet} from "react-helmet";
import Top from "../Header/Top";
import Body from "./Body";
import Footer from "../Footer/Footer";

export class Home extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>NGNC Stable Coin</title>
        </Helmet>
        <Top />
        <Body />
        <Footer />
      </>
    );
  }
}

export default Home;
