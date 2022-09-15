import React from 'react';
import NavBar from './NavBar/NavBar';
import {ItemListContainer} from './ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from './CartContext/Cart';
import CartProvider from './CartContext/CartContext';
const App = () => {

    return (
    <BrowserRouter>
        <CartProvider>
        <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/category/:category' element={<ItemListContainer/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
        </CartProvider>
    </BrowserRouter>
    );
}

export default App;
