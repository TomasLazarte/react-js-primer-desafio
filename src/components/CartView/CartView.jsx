import React, {useContext, useEffect, useState} from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import './Cart.scss'


export const CartView = () => {
    const {cart, deleteProduct, totalCart, cleanCart} = useContext(CartContext);

    return (
        <div className="cartContainer">
            {cart.length === 0 ?
                <div>
                    <h1>No hay productos en el carrito</h1>
                    <Link to={'/'}>
                        <button className='btn btn-secondary'>Ir al inicio</button>
                    </Link>
                </div>
            :
                <div>
                    {cart.map((element) => 
                        <div className="card mb-3 row" style={{maxWidth: '20rem'}} key={element.id}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={element.img} className="img-fluid rounded-start" alt="imagen-de-golosina" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{element.name}</h5>
                                        <p className="card-text">Cantidad: {element.quantity} | Precio por unidad: ${element.price}</p>
                                        <button className="btn btn-danger" onClick={() => deleteProduct(element.id)}>Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className='botones'>
                        <div>
                            <h5>Total: ${totalCart()}</h5>
                        </div>
                        <Link to={'/'}>
                            <button className='btn btn-secondary'>Seguir Comprando</button>
                        </Link>
                        <button className='btn btn-primary' onClick={() => cleanCart()}>Vaciar Carrito</button>
                        <br />
                        <div>
                            <Link to={'/checkout'}>
                                <button className='btn btn-light'>Comprar</button>
                            </Link>
                        </div>
                    </div>
                </div>
                
            }
        </div>
    );
}
