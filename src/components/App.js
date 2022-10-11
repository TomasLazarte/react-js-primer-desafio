import React from 'react';
import NavBar from './NavBar/NavBar';
import { Footer } from './Footer/Footer'
import {ItemListContainer} from './ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartView } from './CartView/CartView';
import CartProvider from './CartContext/CartContext';
import { Checkout } from './Checkout/Checkout';
const App = () => {

    return (
    <BrowserRouter>
        <CartProvider>
        <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/category/:category' element={<ItemListContainer/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<CartView/>} />
            <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        <Footer/>
        </CartProvider>
    </BrowserRouter>
    );
}

export default App;
