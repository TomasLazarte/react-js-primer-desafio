import {React, useState, useEffect} from 'react';
import './ItemDetailContainer.scss'
import db from '../../firebase/firebase'
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import {ItemDetail} from './ItemDetail'
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()
    useEffect(() => {
        setLoading(true)
        const queryDoc = doc(db, 'products', itemId)
        getDoc(queryDoc)
            .then(res => setProduct({id: res.id, ...res.data()}))
            .finally(() => setLoading(false))
    }, [itemId])

    return (
        <div className='containerDetail'>
            {
                loading?
                    <div>Cargando...</div>
                :
                    <ItemDetail details={product}/>
            }
        </div>
    );
}
