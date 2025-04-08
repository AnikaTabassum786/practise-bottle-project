import React, { use } from 'react';
import Bottle from '../Bottle/Bottle';

const Bottles = ({ bottlesPromise }) => {
    const bottles = use(bottlesPromise)
    // console.log(bottles)
    return (
        <div>
            <p>{bottles.length}</p>
            <div>
                {
                    bottles.map((bottle) => {
                        return (
                            <Bottle key={bottle.id} bottle={bottle}>

                            </Bottle>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Bottles;