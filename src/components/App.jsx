import React from 'react';
import NavBar from './NavBar/NavBar';
import {ItemListContainer} from './ItemListContainer/ItemListContainer';
import { ItemCount } from './ItemListContainer/ItemCount';
const App = () => {
    return (
        <>
            <NavBar/>
            <ItemListContainer saludo = "grandbourg golosinas"/>
        </>
    );
}

export default App;
