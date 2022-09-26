import {React, useState, useEffect } from 'react';
import './ItemListContainer.scss'
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom';
export const ItemListContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {category} = useParams()
    useEffect(() => {
        setLoading(true)
            const querydb = getFirestore()
            const queryCollection = collection(querydb, 'products')
            if(category) {
                const queryFilter = query(queryCollection, where('category', '==', category))
                console.log(category)
                getDocs(queryFilter)
                    .then(res => setProduct(res.docs.map(product => ({id: product.id, ...product.data()}))))
                    .finally(() => setLoading(false))
            } else {
                getDocs(queryCollection)
                    .then(res => setProduct(res.docs.map(product => ({id: product.id, ...product.data()}))))
                    .finally(() => setLoading(false))
            }
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