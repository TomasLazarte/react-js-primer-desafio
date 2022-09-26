import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

export const CartWidget = () => {

    return (
        <div>
            <button className="cart btn" ><FaCartPlus/></button>
        </div>
    );
}
