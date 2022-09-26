import React, {useContext} from 'react';
import { CartContext } from '../CartContext/CartContext';

export const Cart = () => {
    const {cart, totalProducts} = useContext(CartContext)

    return (
        <div>
            {cart.length === 0 ? ""
            : <h5>{totalProducts()}</h5>
            }
        </div>
    );
}
