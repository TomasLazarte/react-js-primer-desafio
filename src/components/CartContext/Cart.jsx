import React, {useContext} from 'react';
import { CartContext } from '../CartContext/CartContext';
import "./Cart.scss"

export const Cart = () => {
    const {cart, totalProducts} = useContext(CartContext)

    return (
        <>
            {cart.length === 0 ? ""
            : <p>{totalProducts()}</p>
            }
        </>
    );
}
