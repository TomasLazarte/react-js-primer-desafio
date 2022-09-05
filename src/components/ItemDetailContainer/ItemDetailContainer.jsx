import {React, useState, useEffect} from 'react';
import { obtenerProductos } from '../helpers/obtenerProductos';
import { arrayProductos } from '../../data/data';
import {ItemDetail} from './ItemDetail'

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})

    useEffect(() => {
        obtenerProductos(arrayProductos)
            .then(res => setProducto(res.find((item) => item.id == 1)))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className='container'>
            <ItemDetail {...producto}/>
        </div>
    );
}
