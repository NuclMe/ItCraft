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
        <div className="user-menu">
          {/* <span className='burger-btn'>

          </span> */}
            <a className='member-menu' href='#'>
              <svg className="svg-icon">
                  <use xlinkHref="#icon-user"></use>
              </svg>
              <span className='member-menu_text'> Sign in </span>
            </a>
            <a className="language">
              <svg className="svg-icon">
                  <use xlinkHref="#icon-flag"></use>
              </svg>
            </a>
        </div>
      </div>
    </header>
  );
}

export { Header };
