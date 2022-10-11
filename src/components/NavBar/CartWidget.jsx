import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Cart } from '../CartContext/Cart';

export const CartWidget = () => {

    return ( 
        <>
            <button className="cart btn" ><Cart/><FaCartPlus/></button>
        </>
    );
}
