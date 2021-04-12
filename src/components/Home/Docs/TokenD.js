import React from "react";
import Top from "../../Header/Top";
import Helmet from "react-helmet";

function TokenD({ match }) {
  const { path } = match;
  const link = path.replace("/", "");

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Distribution</title>
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

            <li className="active">
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
          {link == "distribution" ? (
            <div className="home__info">
              <h2 className="doc__title">
                Token
                <br />
                Distribution
              </h2>
              <p className="doc__info__text">
                The protocol starts with a Basis Share supply of zero, the
                entire supply minted purely via community distribution.
              </p>

              <p className="doc__info__text">
                Initial distribution of Basis Cash are done to those that
                deposit DAI (MCD), yCRV, USDT, SUSD, and USDC to the
                distribution contract. A total of 50,000 Basis Cash tokens are
                distributed to depositors, with 10,000 Cash tokens distributed
                per day. Tokens are assigned equally to each stablecoin pools,
                and the amount of stablecoin deposits are limited to 20,000
                tokens per account.
              </p>

              <p className="doc__info__text">
                Afterwards, a total of 750,000 Basis Shares are distributed to
                those that provide liquidity to the BAC-DAI Uniswap v2 pair,
                where users can deposit BAC and DAI tokens to the distribution
                contract and earn BAS tokens. Distribution starts with 6250 BAS
                distributed every day, and the amount of daily seigniorage is
                reduced to 75% every 30 days (e.g. 4687.5 BAS daily distribution
                starting from the 31st day).
              </p>

              <p className="doc__info__text">
                Further distribution of Basis Shares are given to liquidity
                providers of the BAS-DAI Uniswap v2 pair. A total of 250,000
                Basis Shares are distributed over a period of 1 year, and an
                equal amount of tokens are distributed per day .
              </p>
            </div>
          ) : null}
        </section>
      </main>
    </>
  );
}

export default TokenD;
