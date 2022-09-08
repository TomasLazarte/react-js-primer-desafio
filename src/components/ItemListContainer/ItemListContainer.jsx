import {React, useState, useEffect } from 'react';
import './ItemListContainer.scss'
import { obtenerProductos } from '../helpers/obtenerProductos';
import { productos } from '../../data/data';
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)
    const {category} = useParams()
    useEffect(() => {
        obtenerProductos(productos)
            .then(res => {
                category?
                    setProducto(res.find((item) => item.category === category))
                :
                    setProducto(res)
            })
            .catch(error => console.error(error))
            .finally(() => setCargando(false))
    }, [category]);

    return (
        <div className='container contenedorProductos'>
            {
                cargando?
                    <div>Cargando...</div>
                :
                    <ItemList items={producto}/>
            }
        </div>
    );
}