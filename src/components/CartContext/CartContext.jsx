import React, {createContext, useContext, useState} from 'react';

// Contexto
export const CartContext = createContext()

// Custom hook para acceder al contexto
export const useCartContext = () => useContext(CartContext)

// Envuelve nuestra app
const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])
    
    const addProduct = (product, quantity) => {
        if(isInCart(product.id)){
            setCart(cart.map(item => {
                return item.id === product.id ? {...item, quantity: item.quantity + quantity}
                : item
            }))
        } else {
            setCart([...cart, {...product, quantity}])
        }
    }

    const isInCart = (id) =>
        cart.find((item) => item.id === id) ? true
        : false
    
    const cleanCart = () => setCart([])

    const deleteProduct = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const totalProducts = () => {
        let total = 0
        cart.forEach((element) => {
            total = total + (element.quantity)
        })
        return total
    }
    const totalCart = () => {
        let total = 0
        cart.forEach((element) => {
            total = total + (element.quantity * element.price)
        })
        return total
    }



    return <CartContext.Provider value={{cart, addProduct, isInCart, cleanCart, deleteProduct, totalProducts, totalCart}}> {children} </CartContext.Provider>
}

export default CartProvider;