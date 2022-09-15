import {React, useState, useEffect} from 'react';
import './ItemDetailContainer.scss'
import { obtenerProductos } from '../helpers/obtenerProductos';
import { productos } from '../../data/data';
import {ItemDetail} from './ItemDetail'
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)
    const {itemId} = useParams()
    useEffect(() => {
        obtenerProductos(productos)
            .then(res => setProducto(res.find((producto) => producto.id === Number(itemId))))
            .catch(error => console.error(error))
            .finally(() => setCargando(false))
    }, [itemId])

    return (
        <div className='container contenedorDetalles'>
            {
                cargando?
                    <div>Cargando...</div>
                :
                    <ItemDetail details={producto}/>
            }
        </div>
    );
}
