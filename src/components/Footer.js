import React from "react";
import '../Footer.scss';
import {Sprites} from "./Sprites.js";
import logo from "../logo.svg";
function Footer(){
    return(
        <footer>    
            <div className="footer-inner">
                <a className="logo-wrapper" href='#'>
                  <div className='logo-inner'>  
                    <img src={logo} alt=""/>
                  </div>
                    <div className="logo-text">
                        <p>The marketplace for USU Cars,</p>
                        <p>American Cars Muscle Cars and Oldtimer</p>
                        <p>from the United States.</p>
                    </div>
                </a>
                <div className="footer-menu">
                    <div className="foter-menu_inner">
                        <ul className='col'>
                            <li>
                                <a href="#" className="item">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="item">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="item">
                                    Help
                                </a>
                            </li>
                        </ul>
                        <ul className='col'>
                            <li>
                                <a href="#" className="item">
                                    Dealer
                                </a>
                            </li>
                            <li>
                                <a href="#" className="item">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="item">
                                Terms
                                </a>
                            </li>
                        </ul>
                        <ul className='col'>
                        <li>
                            <a href="#" className="item">
                            Advertising
                            </a>
                        </li>
                        <li>
                            <a href="#" className="item">
                            Press
                            </a>
                        </li>
                        <li>
                            <a href="#" className="item">
                            Carrier
                            </a>
                        </li>
                    </ul>                   
                    </div>
               </div>
                <div className="socials">
                   <a className='social-link' href='#'>
                        <svg className="svg-icon">
                            <use xlinkHref="#instagram"></use>
                        </svg>
                   </a>
                   <a className='social-link' href='#'>
                        <svg className="svg-icon">
                            <use xlinkHref="#facebook"></use>
                        </svg>
                   </a>
                </div>
            </div>  
          <Sprites/>
        </footer>
    );
}

export { Footer };