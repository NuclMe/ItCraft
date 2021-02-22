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
                      <div className='sorting-wrapper'>
                           <div className='sorting-holder'>
                               {/* <div className="sorting-item"> */}
                                    <div className="tabs-container">
                                        <a href="#" className="tab">All</a>
                                        <a href="#" className="tab active">Used</a>
                                        <a href="#" className="tab">Classics</a>
                                        <a href="#" className="tab">New</a>
                                    </div>
                               {/* </div> */}
                           </div>
                           <div className='sorting-holder'>
                               <div className="title">
                                   Vehicile type
                               </div>
                               <div className='input-holder'>
                                    <span className='line'></span>
                                    <input type="select" className='text-field' placeholder='All' id='car-type_input'/>                            
                                    <div name="1" id="car-type_list" className='dropdown-holder'>
                                        <svg className="svg-icon">
                                                <use xlinkHref="#icon-arrow-down"></use>
                                        </svg>
                                        <div className="dropdown-inner">
                                            <span className='item'> Audi</span>
                                            <span className='item'> Audi</span>
                                            <span className='item'> Audi</span>                                       
                                        </div>
                                    </div>
                                </div>
                           </div>
                           <div className='sorting-holder'>                    
                                <div className="title">
                                        Manufacturer
                                </div>
                                <div className='input-holder'>
                                <span className='line'></span>
                                    <input type="select" className='text-field' placeholder='All' id='car-type_input'/>                            
                                    <div name="1" id="car-type_list" className='dropdown-holder'>
                                        <svg className="svg-icon">
                                                <use xlinkHref="#icon-cross"></use>
                                        </svg>
                                        <div className="dropdown-inner">
                                            <span className='item'> Audi</span>
                                            <span className='item'> Audi</span>
                                            <span className='item'> Audi</span>                                       
                                        </div>
                                    </div>
                                </div>
                            </div>
                           <div className='sorting-holder'>
                               <div className="title">
                                   Model
                               </div>
                               <div className='input-holder filtered'>
                                    <span className='line'></span>
                                    <input type="select" className='text-field' placeholder='All' id='car-type_input'/>                            
                                    <div name="1" id="car-type_list" className='dropdown-holder'>
                                        <svg className="svg-icon">
                                                <use xlinkHref="#icon-arrow-down"></use>
                                        </svg>
                                        <div className="dropdown-inner">
                                            <span className='item'> Audi</span>
                                            <span className='item'> Audi</span>
                                            <span className='item'> Audi</span>                                       
                                        </div>
                                    </div>
                                </div>
                           </div>
                       </div>
                      <div className="sorting-wrapper">
                            <div className='sorting-holder'>                            
                                   <div className="title">
                                       Model
                                   </div>
                                <div className='sorting-inner'>
                                   <div className='input-holder'>
                                        <span className='line'></span>
                                        <input type="select" className='text-field' placeholder='All' id='car-type_input'/>                            
                                        <div name="1" id="car-type_list" className='dropdown-holder'>
                                            <svg className="svg-icon">
                                                    <use xlinkHref="#icon-arrow-down"></use>
                                            </svg>
                                            <div className="dropdown-inner">
                                                <span className='item'> Audi</span>
                                                <span className='item'> Audi</span>
                                                <span className='item'> Audi</span>                                       
                                            </div>
                                        </div>
                                    </div>
                             
                                   <div className='input-holder'>
                                        <span className='line'></span>
                                        <input type="select" className='text-field' placeholder='All' id='car-type_input'/>                            
                                        <div name="1" id="car-type_list" className='dropdown-holder'>
                                            <svg className="svg-icon">
                                                    <use xlinkHref="#icon-arrow-down"></use>
                                            </svg>
                                            <div className="dropdown-inner">
                                                <span className='item'> Audi</span>
                                                <span className='item'> Audi</span>
                                                <span className='item'> Audi</span>                                       
                                            </div>
                                        </div>
                                    </div>
                               </div>
                           </div>
                            <div className='sorting-holder'>                            
                                   <div className="title">
                                        Milleage(miles)
                                   </div>
                                <div className='sorting-inner'>
                                   <div className='input-holder'>
                                        <span className='line'></span>
                                        <input type="select" className='text-field' placeholder='All' id='car-type_input'/>                            
                                        <div name="1" id="car-type_list" className='dropdown-holder'>
                                            <svg className="svg-icon">
                                                    <use xlinkHref="#icon-arrow-down"></use>
                                            </svg>
                                            <div className="dropdown-inner">
                                                <span className='item'> Audi</span>
                                                <span className='item'> Audi</span>
                                                <span className='item'> Audi</span>                                       
                                            </div>
                                        </div>
                                    </div>
                             
                                   <div className='input-holder'>
                                        <span className='line'></span>
                                        <input type="select" className='text-field' placeholder='All' id='car-type_input'/>                            
                                        <div name="1" id="car-type_list" className='dropdown-holder'>
                                            <svg className="svg-icon">
                                                    <use xlinkHref="#icon-arrow-down"></use>
                                            </svg>
                                            <div className="dropdown-inner">
                                                <span className='item'> Audi</span>
                                                <span className='item'> Audi</span>
                                                <span className='item'> Audi</span>                                       
                                            </div>
                                        </div>
                                    </div>
                               </div>
                           </div>
                            <div className='sorting-holder'>                            
                                   <div className="title">
                                        Price($)
                                   </div>
                                <div className='sorting-inner'>
                                   <div className='input-holder'>
                                        <span className='line'></span>
                                        <input type="select" className='text-field' placeholder='All' id='car-type_input'/>                                                                    
                                    </div>
                             
                                   <div className='input-holder filtered'>
                                        <span className='line'></span>
                                        <input type="select" className='text-field' placeholder='All' id='car-type_input'/>                                                                  
                                    </div>
                               </div>
                           </div>
                       </div>
                      <div className="sorting-wrapper">
                        <div className="title">
                            Transmission
                        </div>
                        <div className="row">
                            <input type="checkbox" name='manual' id='option1' className='checkbox'/>
                            <label htmlFor="option1">
                                Manual gearbox
                            </label>
                        </div>
                        <div className="row">
                            <input type="checkbox" name='manual' id='option2' className='checkbox'/>
                            <label htmlFor="option2">
                                Manual gearbox
                            </label>
                        </div>
                        <div className="row">
                            <input type="checkbox" name='manual' id='option3' className='checkbox'/>
                            <label htmlFor="option3">
                                Manual gearbox
                            </label>
                        </div>
                        <div className="row">
                            <input type="checkbox" name='manual' id='option4' className='checkbox'/>
                            <label htmlFor="option4">
                                Manual gearbox
                            </label>
                        </div>
                      </div>
                      <div className="sorting-wrapper">
                            <div className='sorting-holder'>                            
                                   <div className="title">
                                     Days on Market
                                   </div>
                                <div className='sorting-inner'>
                                   <div className='input-holder'>
                                        <span className='line'></span>
                                        <input type="select" className='text-field' placeholder='From' id='car-type_input'/>                            
                                       
                                    </div>                             
                                   <div className='input-holder filtered'>
                                        <span className='line'></span>
                                        <input type="select" className='text-field' placeholder='All' id='car-type_input'/>                                                                 
                                    </div>
                               </div>
                           </div>  
                        </div>
                      <div className="sorting-wrapper">
                        <div className="title">
                          Fuel type
                        </div>
                        <div className="row">
                            <input type="checkbox" name='manual' id='option1' className='checkbox'/>
                            <label htmlFor="option1">
                                Manual gearbox
                            </label>
                        </div>
                        <div className="row">
                            <input type="checkbox" name='manual' id='option2' className='checkbox'/>
                            <label htmlFor="option2">
                                Manual gearbox
                            </label>
                        </div>
                        <div className="row">
                            <input type="checkbox" name='manual' id='option3' className='checkbox'/>
                            <label htmlFor="option3">
                                Manual gearbox
                            </label>
                        </div>
                        <div className="row">
                            <input type="checkbox" name='manual' id='option4' className='checkbox'/>
                            <label htmlFor="option4">
                                Manual gearbox
                            </label>
                        </div>
                      </div>
                      <div className="sorting-wrapper">
                        <div className="title">
                            New/Used / CPO
                        </div>
                        <div className="row">
                            <input type="checkbox" name='manual' id='option1' className='checkbox'/>
                            <label htmlFor="option1">
                                Manual gearbox
                            </label>
                        </div>
                        <div className="row">
                            <input type="checkbox" name='manual' id='option2' className='checkbox'/>
                            <label htmlFor="option2">
                                Manual gearbox
                            </label>
                        </div>
                      
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