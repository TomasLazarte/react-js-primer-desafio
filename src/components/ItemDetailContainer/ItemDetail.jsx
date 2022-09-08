import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
export const ItemDetail = ({details}) => {
    return (
        <div className="cardDetalles card-body border-secondary mb-3">
            <div className="divImg">
                <img className="imgDetalles" src={details.img}/>
            </div>
            <div className='infoDetalles card-body'>
                <h2 className="card-title">{details.nombre}</h2>
                <h4 className="card-text">$ {details.precio}</h4>
                <p className="card-text">{details.descripcion}</p>
                <ItemCount stock={details.stock} initial={1}/>
            </div>
        </div>
    );
}
