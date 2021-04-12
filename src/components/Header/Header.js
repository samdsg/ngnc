import React, { useEffect } from "react";

function Header({ link }) {
  console.log(link);
  useEffect(() => {
    /*===== MENU SHOW =====*/
    const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

      if (toggle && nav) {
        toggle.addEventListener("click", () => {
          nav.classList.toggle("show");
        });
      }
    };
    showMenu("nav-toggle", "nav-menu");

    /*===== ACTIVE AND REMOVE MENU =====*/
    const navLink = document.querySelectorAll(".nav__link");

    function linkAction() {
      /*Active link*/
      navLink.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");

      /*Remove menu mobile*/
      const navMenu = document.getElementById("nav-menu");
      navMenu.classList.remove("show");
    }
    navLink.forEach((n) => n.addEventListener("click", linkAction));
  }, []);

  return (
    <>
      {/* HEADER  */}
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <a href="/" className="nav__logo">
              NGNC
            </a>
          </div>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="/"
                  className={`nav__link ${link == "/" ? "active" : ""}`}
                >
                  Home
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="/docs"
                  className={`nav__link ${link == "/docs" ? "active" : ""}`}
                >
                  Docs
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-menu"></i>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
