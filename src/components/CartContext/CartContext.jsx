import React, {createContext, useContext, useState} from 'react';

// Contexto
export const CartContext = createContext()

// Custom hook para acceder al contexto
export const useCartContext = () => useContext(CartContext)

// Envuelve nuestra app
const CartProvider = ({children}) => {
    
    const [carrito, setCarrito] = useState([])
    
    const agregarProducto = (producto, cantidad) => {
        if(estaEnCarrito(producto.id)){
            setCarrito(carrito.map(item => {
                return item.id === producto.id ? {...item, cantidad: item.cantidad + cantidad}
                : item
            }))
        } else {
            setCarrito([...carrito, {...producto, cantidad}])
        }
    }

    console.log(carrito)
    const estaEnCarrito = (id) =>
        carrito.find((item) => item.id === id) ? true
        : false
    
    const limpiarCarrito = () => setCarrito([])

    const eliminarProducto = (id) => {
        setCarrito(carrito.filter(item => item.id !== id))
    }



    return <CartContext.Provider value={{carrito, agregarProducto, estaEnCarrito, limpiarCarrito, eliminarProducto}}> {children} </CartContext.Provider>
}

export default CartProvider;