import React from "react";
import { Button } from "react-bootstrap";
import Img from "react-cool-img";
import Naira from "../../image/naira.svg";

function Body() {
  return (
    <>
      <main class="l-main">
        <section class="home bd-grid" id="home">
          <div class="home__data">
            <h1 class="home__title">NGNC</h1>
            <span class="home__desc">
              Decentralized Stablecoin with an Algorithmic Central Bank
            </span>

            <div class="home__actions">
              <Button href="/app">Launch App</Button>
              <Button href="#about">About NGNC</Button>
            </div>
          </div>

          <div class="home__img">
            <div class="home__img_c">
              <Img src={Naira} alt="NGN COIN" />
            </div>
          </div>
        </section>
      </main>

      <section class="about section bd-grid" id="about">
        <h2 class="ngnc-title">
          NGNCash <span>is an Algorithmic Stablecoin in Pegged to </span>1 USD.
        </h2>

        <span class="about__info">
          The protocol is designed to expand and contract suppy similar to the
          way central bnks trade fiscal debt to stabilize purchasing power.
        </span>
      </section>

      <section class="minfo section" id="more__info">
        <div class="minfo__boxes bd-grid">
          <div class="minfo__box">
            <h3>NGN Cash</h3>
            <span class="minfo__data">
              Every Basic Cash amis a peg to 1 US Dollar, and is intended to be
              used as a medium of exchange
            </span>

            <div class="minfo__img">
              <Img src={Naira} alt="NGN COIN" />
            </div>
          </div>

          <div class="minfo__box">
            <h3>Basis Share</h3>
            <span class="minfo__data">
              Shares are a medium of governing the protocol, and receiving
              seignorage rewards through the Boardroom.
            </span>

            <div class="minfo__img">
              <Img src={Naira} alt="NGN COIN" />
            </div>
          </div>

          <div class="minfo__box">
            <h3>Basis Bond</h3>
            <span class="minfo__data">
              Bonds promise the holder Premiums when NGNC pricing return to its
              1 dollar peg.
            </span>

            <div class="minfo__img">
              <Img src={Naira} alt="NGN COIN" />
            </div>
          </div>

          <div class="minfo__box">
            <h3>Modularity</h3>
            <span class="minfo__data">
              Ease of integration with various DeFi liquidity pools
            </span>

            <div class="minfo__img">
              <Img src={Naira} alt="NGN COIN" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Body;
