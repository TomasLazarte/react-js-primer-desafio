import {React} from 'react';
export const Item = ({id, nombre, descripcion, precio, img}) => {
    return (
            <div className="cardProductos">
                <div className="card-body">
                    <img src={img}/>
                    <h4 className="card-title">{nombre}</h4>
                    <h5>${precio}</h5>
                    <p className="card-text">{descripcion}</p>
                </div>
            </div>
    );
}