import React, {useState} from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext/CartContext';
export const ItemDetail = ({details}) => {

    const [productsQuantity, setProductsQuantity] = useState(0)
    const {addProduct} = useCartContext()

    const onAdd = (quantity) => {
        setProductsQuantity(quantity)
        addProduct(details, quantity)
    }

    return (
        <div className="cardDetail card-body border-secondary mb-3">
            <div className="imgDiv">
                <img className="imgDetail" src={details.img} alt="imagen-de-golosina"/>
            </div>
            <div className='infoDetail card-body'>
                <h2 className="card-title">{details.name}</h2>
                <h4 className="card-text">$ {details.price}</h4>
                <p className="card-text">{details.description}</p>
                {productsQuantity === 0 ?
                    <ItemCount stock={details.stock} initial={1} onAdd={onAdd}/>
                :
                    <Link to={'/cart'}>
                        <button className='btn btn-light'>
                            Ir al carrito
                        </button>
                    </Link>
                }
            </div>
        </div>
    );
}
