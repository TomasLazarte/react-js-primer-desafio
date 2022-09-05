import React from 'react';
import NavBar from './NavBar/NavBar';
import {ItemListContainer} from './ItemListContainer/ItemListContainer';
import {ItemCount} from './ItemCount/ItemCount';

const App = () => {
    return (
        <>
            <NavBar/>
            <ItemListContainer nombre = "grandbourg golosinas"/>
        </>
    );
}

export default App;
