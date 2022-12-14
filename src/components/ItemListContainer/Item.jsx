import {React} from 'react';
import { Link } from 'react-router-dom';

export const Item = ({product}) => {
        return (
                <div className="cardProducts card-body border-secondary mb-3">
                        <img src={product.img} className="card-img-top" alt="imagen-de-golosina" />
                        <h6 className="card-title">{product.name}</h6>
                        <p className="card-text">${product.price}</p>
                        <Link to={`/item/${product.id}`}>
                                <button className="btn btn-secondary">Detalles</button>
                        </Link>
                </div>
        );
}