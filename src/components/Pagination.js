import React from "react";

function Pagination(){
    return(
        <div className="pagination">

            <a className="box prew" href='#'>
                <svg className="svg-icon">
                    <use xlinkHref="#left-arrow"></use>
                </svg>
                <span className='text'>Prew   </span>          
            </a>
            <div className='pagination-numbers'>
                <a className="box active"  href='#'>
                    1
                </a>
                <a className="box" href='#'>
                    2
                </a>
                <a className="box" href='#'>
                    3
                </a>
                <a className="box" href='#'>
                    4
                </a>
                <a className="box" href='#'>
                    5
                </a>
                <a className="box more" href='#'>
                    ...
                </a>
                <a className="box" href='#'>
                    53
                </a>
            </div>
            <a className="box next" href='#'>
                <span className='text'>Next</span>
                <svg className="svg-icon">
                    <use xlinkHref="#right-arrow"></use>
                </svg>
            </a>
        </div>
    );
}

export {Pagination};