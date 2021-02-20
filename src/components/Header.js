import React from 'react';
import logo from '../logo.svg'; 

function Header(){
    return(
        <header>
            
                <div className='header-inner'>
                        <a href="#" className='logo-wrapper'>
                            <img src={logo}alt=""/>
                        </a>
                            <menu className='menu'>
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
                                 <li>
                                     <a href="#" className="item">
                                         Dealer
                                     </a>
                                 </li>
                                 <li>
                                     <a href="#" className="item">
                                         Carrier
                                     </a>
                                 </li>
                                 
                            </menu>
                </div>

                

            
        </header>
    );
};

export {Header};