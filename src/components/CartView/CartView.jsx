import React, {useContext, useEffect, useState} from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import './Cart.scss'


export const CartView = () => {
    const {cart, deleteProduct, totalCart} = useContext(CartContext);

    return (
            <div className="cartContainer row">
            {
                cart.map((element) => 
                    <div className="card mb-3" style={{maxWidth: '20rem'}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={element.img} className="img-fluid rounded-start" alt="..." />
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
                    
                    // <div>
                    //     <span>{element.name}</span>
                    //     <span>{element.img}</span>
                    //     <span>{element.price}</span>

                    //     <span>Cantidad: {element.cantidad}</span>
                    //     <button className="btn btn-primary" onClick={() => deleteProduct(element.id)}>Eliminar</button>
                    // </div>
                )
            }
                <div className="card-body row">
                    <p className="card-text">Total: ${totalCart()}</p>
                    <div>
                        <button className='btn btn-light'>
                            Finalizar Comprar
                        </button>
                        <Link to={'/'}>
                            <button className='btn btn-light'>
                                Seguir Comprando
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            

    );
}
