import React, {useContext, useState} from 'react';
import {addDoc, collection} from 'firebase/firestore';
import db from '../../firebase/firebase'
import { CartContext } from '../CartContext/CartContext';

export const Checkout = () => {
    const {cart, totalCart, cleanCart} = useContext(CartContext)
    const [orderId, setOrderId] = useState()
    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        phone: "",
    })

    const orders = async(data) => {
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col, data)
            setOrderId(order.id)
            cleanCart()
        } catch (error){
            console.log(error)
        }
    }

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const items = cart.map(product => {return {id: product.id, name: product.name, quantity: product.quantity, price: product.price}})
        const date = new Date()
        const total = totalCart()
        const data = {buyer, items, date, total}
        orders(data)
    }

    return (
        <div className='container'>
            {!orderId ?
                <div>
                    <h3>Complete los siguientes datos para finalizar su compra</h3>
                    <br/>
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="inputUsername" className="form-label">Nombre</label>
                            <input type="text" className="form-control" value={buyer.name} onChange={handleInputChange} name="name" placeholder="Ingrese su nombre" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="text" className="form-control" value={buyer.email} onChange={handleInputChange} name="email" aria-describedby="emailHelp" placeholder="@"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputNumber" className="form-label">Telefono</label>
                            <input type="text" className="form-control" value={buyer.phone} onChange={handleInputChange} name="phone" placeholder={1112345678} />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Comprar</button>
                        </div>
                    </form>
                </div>
            :   
                <div>
                    <h1>Su orden de compra es: {orderId}</h1>
                </div>
            }
        </div>
    );
}
