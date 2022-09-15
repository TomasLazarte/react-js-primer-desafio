import React, {useState} from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
export const ItemDetail = ({details}) => {

    const [cantidadProductos, setCantidadProductos] = useState(0)

    const onAdd = (cont) => {
        setCantidadProductos(cont)
    }

    return (
        <div className="cardDetalles card-body border-secondary mb-3">
            <div className="divImg">
                <img className="imgDetalles" src={details.img} alt="imagen-de-golosina"/>
            </div>
            <div className='infoDetalles card-body'>
                <h2 className="card-title">{details.nombre}</h2>
                <h4 className="card-text">$ {details.precio}</h4>
                <p className="card-text">{details.descripcion}</p>
                {cantidadProductos === 0 ?
                    <ItemCount stock={details.stock} initial={1} onAdd={onAdd}/>
                :
                    <Link to={'/cart'}>
                        <button className='btn btn-light'>
                            Finalizar Compra
                        </button>
                    </Link>
                }
            </div>
        </div>
    );
}
