import React from 'react';
import {ItemCount} from '../ItemCount/ItemCount'
import { obtenerProductos } from '../helpers/obtenerProductos';
import { arrayProductos } from '../../data/data';
import { useState } from 'react';
import { useEffect } from 'react';
import { ItemList } from './ItemList'
export const ItemListContainer = ({nombre}) => {

    function agregar(cont) {
        console.log(`Se han agregado ${cont} productos.`)
    }

    // Variable de estado
    const [productos, setProductos] = useState([])

    useEffect(() => {
        obtenerProductos(arrayProductos)
            .then(response => 
                setProductos(response)
            )
            .catch(error => console.error(error))
    }, []);

    return (
        <div className="container">
            <h1>Hola, somos {nombre}, delivery de kiosco.</h1>
            <h3>Hacemos envíos de 18 a 00hs</h3>
            <div className="container cardContainer">
                <ItemCount stock={5} agregar={agregar}/>
                <ItemList items={productos}/>
            </div>
        </div>
    );
}