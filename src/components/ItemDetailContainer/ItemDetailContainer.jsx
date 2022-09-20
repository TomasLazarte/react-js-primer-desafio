import {React, useState, useEffect} from 'react';
import './ItemDetailContainer.scss'
import { getProducts } from '../helpers/getProducts';
import { products } from '../../data/products';
import {ItemDetail} from './ItemDetail'
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()
    useEffect(() => {
        getProducts(products)
            .then(res => setProduct(res.find((item) => item.id === Number(itemId))))
            .catch(error => console.error(error))
            .finally(() => setLoading(false))
    }, [itemId])

    return (
        <div className='container containerDetail'>
            {
                loading?
                    <div>Cargando...</div>
                :
                    <ItemDetail details={product}/>
            }
        </div>
    );
}
