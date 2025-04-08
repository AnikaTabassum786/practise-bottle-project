import React from 'react';
import './Bottle.css'

const Bottle = ({bottle}) => {
    console.log(bottle)
    return (
        <div className='card'>
            <img src={bottle.img} alt="" />
        </div>
    );
};

export default Bottle;