import React from "react";
import Top from "../../Header/Top";
import Helmet from "react-helmet";

function Stabilization({ match }) {
  const { path } = match;
  const link = path.replace("/", "");

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Stabilization</title>
      </Helmet>

      <Top />
      <main id="doc__main" className="bd-grid">
        <aside className="side__nav">
          <ul>
            <li>
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

            <li className="active">
              <a href="/stabilization">
                <i class="bx bx-command"></i>
                <span>Stabilization Mechanism</span>
              </a>
            </li>
          </ul>
        </aside>
        <section className="doc__info section" id="swap">
          {link == "stabilization" ? (
            <div className="home__info">
              <h2 className="doc__title">
                Stabilization <br /> Mechanism
              </h2>
              <p className="doc__info__text">
                The NGN Cash protocol is designed to guarantee Basis Cash tokens
                to be exchanged at a value of a single US dollar, with the
                stabilizer (in-protocol stability mechanism) in charge of
                matching the supply of Basis Cash to their demand.
              </p>
            </div>
          ) : null}
        </section>
      </main>
    </>
  );
}

export default Stabilization;
