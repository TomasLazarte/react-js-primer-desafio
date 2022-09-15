import React, {createContext, useContext, useState} from 'react';

// Contexto
export const CartContext = createContext()

// Custom hook para acceder al contexto
export const useCartContext = () => useContext(CartContext)

// Envuelve nuestra app
const CartProvider = ({children}) => {
    
    const [productos, setProductos] = useState([])
    
    const agregarProducto = (nombreProducto) => {
        const encontroProducto = productos.find((producto) => producto.nombre == nombreProducto)
        if(encontroProducto) {
            encontroProducto.cantidad++;
            setProductos([...productos])
        } else {
            setProductos([...productos, {nombre: nombreProducto, cantidad: 1}])
        }
    }
    
    return <CartContext.Provider value={{productos, agregarProducto}}> {children} </CartContext.Provider>
}

export default CartProvider;