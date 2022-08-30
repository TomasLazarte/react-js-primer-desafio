import React from 'react';
import { ItemCount } from './ItemCount';
export const ItemListContainer = ({saludo}) => {

    function agregar(cont) {
        console.log(`Se han agregado ${cont} productos.`)
    }

    return (
        <div className="container">
            <h1>Hola, somos {saludo}, delivery de kiosco.</h1>
            <h3>Hacemos envíos de 18 a 00hs</h3>
            <ItemCount stock={5} inicial={1} agregar={agregar}/>
        </div>
    );
}
