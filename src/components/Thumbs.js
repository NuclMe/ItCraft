import React from "react";
import {useEffect ,useState} from "react";
import '../Thumbs.scss';


function Thumbs(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:8080/products")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        
        <div className="thumbs-wrapper">
          {items.map(item => (                              
            
                <div className="thumb" key={item.id}>
                    <a className='thumb-href' href='#'>
                        <div className="img-holder">
                            <img src="https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/volvo-xc90__734991-341x224x60.jpg" alt=""/>
                        </div>
                       <div className='thumb-inner'>
                            <div className='row'>
                                <div className="title">
                                    {item.id}
                                </div>
                            </div>
                            <div className="row">
                                <div className="price">
                                    {item.price}
                                </div>
                            </div>
                            <div className="row">
                                <div className="param-wrapper">
                                    <div className='col'>
                                        <div className="item">
                                            <svg className="svg-icon">
                                                <use xlinkHref="#calendar"></use>
                                            </svg>
                                            {item.year}
                                        </div>
                                        <div className="item">
                                            <svg className="svg-icon">
                                                <use xlinkHref="#speed"></use>
                                            </svg>
                                            {item.speed}
                                        </div>
                                    </div>
                                   <div className='col'>
                                        <div className="item">
                                            <svg className="svg-icon">
                                                <use xlinkHref="#petrol"></use>
                                            </svg>
                                            {item.engine}
                                        </div>
                                        <div className="item">
                                            <svg className="svg-icon">
                                                <use xlinkHref="#transmission"></use>
                                            </svg>
                                            {item.transmission}
                                        </div>
                                   </div>
                                </div>
                              
                            </div>
                            <div className="description">
                                    {item.description}
                            </div>
                           
                            {item.name} 
                       </div>
                    </a>

                </div>
             
         
          ))}
        </div>
     
      );
    }    
}
export { Thumbs } ;