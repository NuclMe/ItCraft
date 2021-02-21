import React from "react";
import '../Main.scss';

function Main(){
    return(
        <main>
            <div className="container">
                <a className="headline">
                    <svg className="svg-icon">
                        <use xlinkHref="#left-arrow"></use>
                    </svg>
                    <h1 className='headline-text'>Blog</h1>
                </a>
                <div className='main-inner'>
                    <aside>
                       <div className='sorting-holder'>
                           <div className="sorting-item">
                                <div className="tabs-container">
                                    <a href="#" className="tab">All</a>
                                    <a href="#" className="tab active">Used</a>
                                    <a href="#" className="tab">Classics</a>
                                    <a href="#" className="tab">New</a>
                                </div>
                           </div>
                       </div>
                       <div className='sorting-holder'>
                           <div className="title">
                               Vehicile type
                           </div>
                           <input type="select"/>
                           <select name="1" id="car-type">
                               <option value="1">
                                   Toyota
                               </option>
                               <option value="2">
                                   Subaru
                               </option>
                           </select>
                       </div>
                    </aside>
                    <section>        
                        21212        
                    </section>
                </div>
            </div>
       
        </main>
    );
}

export {Main};