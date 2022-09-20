import {React, useState, useEffect } from 'react';
import './ItemListContainer.scss'
import { getProducts } from '../helpers/getProducts';
import { products } from '../../data/products';
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom';
export const ItemListContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {category} = useParams()
    useEffect(() => {
        setLoading(true)
        getProducts(products)
            .then(res => {
                category?
                    setProduct(res.filter((item) => item.category === category))
                :
                    setProduct(res)
            })
            .catch(error => console.error(error))
            .finally(() => setLoading(false))
    }, [category]);
    
    return (
        <div className='containerProducts'>
            {
                loading?
                    <div>Cargando...</div>
                :
                    <ItemList products = {product}/>
            }
        </div>
    );
}