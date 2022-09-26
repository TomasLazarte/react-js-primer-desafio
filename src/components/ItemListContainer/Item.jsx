import {React} from 'react';
import { Link } from 'react-router-dom';

export const Item = ({product}) => {
        return (
                <div className="cardProducts card-body border-secondary mb-3">
                        <img src={product.img} className="card-img-top imgProducts" alt="golosina" />
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">${product.price}</p>
                        <Link to={`/item/${product.id}`}>
                                <button className="btn btn-secondary">Detalles</button>
                        </Link>
                </div>
        );
}

{/*// <div className="cardProducts card-body border-secondary mb-3">
                //         <img className="imgProducts" src={product.img} alt="imagen-de-golosina"/>
                //         <h4 className="card-title">{product.name}</h4>
                //         <p className="card-text">${product.price}</p>
                //         <Link to={`/item/${product.id}`}>
                //                 <button className="btn btn-secondary">Detalles</button>
                //         </Link>
                // </div>*/}