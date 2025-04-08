import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = ({ bottlesPromise }) => {
    const bottles = use(bottlesPromise)
    // console.log(bottles)

    const [cart, setCart] = useState([])

    const handleAddToCart=(bottle)=>{
         console.log('Add to cart',bottle)
        const newCart = [...cart, bottle]
        setCart(newCart)
    }

    return (
        <div>
            <p>{bottles.length}</p>
            <p>Cart Items: {cart.length}</p>
            <div>
                {
                    cart.map((c)=>{
                        return(
                            <div  key={c.id}>
                             <img width={100} src={c.img} alt="" />
                            </div>
                        )
                    })
                }
            </div>
            <div className='bottles-container'>
                {
                    bottles.map((bottle) => {
                        return (
                            <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}>
                            </Bottle>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Bottles;