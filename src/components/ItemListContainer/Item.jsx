import {React} from 'react';
import { Link } from 'react-router-dom';

export const Item = ({producto}) => {
        return (
                <div className="cardProductos card-body border-secondary mb-3">
                        <img className="imgProductos" src={producto.img}/>
                        <h4 className="card-title">{producto.nombre}</h4>
                        <p className="card-text">${producto.precio}</p>
                        <Link to={`/item/${producto.id}`}>
                                <button className="btn btn-secondary">Detalles</button>
                        </Link>
                </div>
        );
}