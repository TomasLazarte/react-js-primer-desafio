import React from 'react';

export const ItemDetail = ({nombre, precio, descripcion, img}) => {
    return (
        <div className='cardContainer'>
            <img src={img}/>
            <div className='cardProductos'>
                <h2 className="card-title">{nombre}</h2>
                <h4>$ {precio}</h4>
                <p>{descripcion}</p>
            </div>
        </div>
    );
}
