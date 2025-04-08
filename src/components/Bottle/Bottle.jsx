import React from 'react';
import './Bottle.css'

const Bottle = ({bottle,handleAddToCart}) => {

    console.log(bottle)
    const {name,img,price,stock}= bottle

    return (
        <div className='card bottle'>
           <img src={img} alt="" />
            <p>{name}</p>
            <p>${price}</p>
            <p>Remaining Bottle: {stock}</p>
            <button onClick={()=>handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;