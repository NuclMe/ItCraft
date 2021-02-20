import React from "react";
import logo from "../logo.svg";

function Header() {
  return (
    <header>
      <div className="header-inner">
        <a href="#" className="logo-wrapper">
          <img src={logo} alt="" />
        </a>
        <menu className="menu">
          <li className="item">
            <a href="#">Blog</a>
          </li>
          <li className="item">
            <a href="#">Contact</a>
          </li>
          <li className="item">
            <a href="#">Help</a>
          </li>
          <li className="item">
            <a href="#">Dealer</a>
          </li>
          <li className="item">
            <a href="#">Carrier</a>
          </li>
        </menu>
      </div>
    </header>
  );
}

export { Header };
