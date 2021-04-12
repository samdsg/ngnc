import React from "react";
import Helmet from "react-helmet";
import Top from "../Header/Top";

function Docs({ match }) {
  const { path } = match;
  const link = path.replace("/", "");

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Documentation</title>
      </Helmet>

      <Top />
      <main id="doc__main">
        <aside className="side__nav">
          <ul>
            <li className="active">
              <a href="/">
                <i class="bx bxs-home"></i>
                <span>Home</span>
              </a>
            </li>

            <li>
              <a href="/background">
                <i class="bx bxs-key"></i>
                <span>Background</span>
              </a>
            </li>

            <li>
              <a href="/distribution">
                <i class="bx bxs-spreadsheet"></i>
                <span>
                  Token <br /> Distribution
                </span>
              </a>
            </li>

            <li>
              <a href="/stabilization">
                <i class="bx bx-command"></i>
                <span>Stabilization Mechanism</span>
              </a>
            </li>
          </ul>
        </aside>
        <section className="doc__info section" id="swap">
          {link == "docs" ? (
            <div className="home__info">
              <h2 className="doc__title">Home</h2>

              <p className="doc__info__title">
                Welcome to the NGNC documentation
              </p>

              <p className="doc__info__title">
                <b>NGNC</b> is an open-source, permissionless algorithmic
                stablecoin
              </p>
            </div>
          ) : null}
        </section>
      </main>
    </>
  );
}

export default Docs;
