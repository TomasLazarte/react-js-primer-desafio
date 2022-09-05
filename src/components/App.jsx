import React from 'react';
import NavBar from './NavBar/NavBar';
import {ItemListContainer} from './ItemListContainer/ItemListContainer';
import {ItemCount} from './ItemCount/ItemCount';
import {ItemDetailContainer} from './ItemDetailContainer/ItemDetailContainer';

const App = () => {
    return (
        <>
        {/*
            <NavBar/>
            <ItemListContainer nombre = "grandbourg golosinas"/>
        */}
            
        <ItemDetailContainer/>
        </>
    );
}

export default App;
