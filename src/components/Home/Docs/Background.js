import React from "react";
import Top from "../../Header/Top";
import Helmet from "react-helmet";

function Background({ match }) {
  const { path } = match;
  const link = path.replace("/", "");
  console.log(link);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Background</title>
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

            <li className="active">
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
          {link == "background" ? (
            <div className="home__info">
              <h2 className="doc__title">Background</h2>
              <p className="doc__info__text">
                Welcome to the NGNC documentation
              </p>
              <p className="doc__info__text">
                The price volatility of cryptocurrencies is a major blocker for
                mass adoption. Their rapid change in fiat-denominated value
                causes payment values to vary even during settlement times,
                being highly inconvenient to merchants that handle them.
              </p>
              <p className="doc__info__text">
                Stablecoins are cryptocurrencies with an exchange rate peg with
                existing fiat currencies (such as the United States dollar) or a
                fiat-related index, thereby drastically increasing their
                usefulness as a payment medium.
              </p>

              <h4>Algorithmic Central Banks</h4>
              <p className="doc__info__text">
                Although there exists a wide variety of stablecoin mechanisms,
                Basis Cash specifically uses an “algorithmic central bank”
                approach to manage the supply of tokens according to a
                predetermined logic. The algorithm is in charge of balancing
                stablecoin supply to fluctuating demand, ensuring that the token
                price remains relatively stable. Further details are available
                under the Mechanisms section.
              </p>
            </div>
          ) : null}
        </section>
      </main>
    </>
  );
}

export default Background;
