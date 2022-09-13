import {React, useState} from 'react';
import '../ItemDetailContainer/ItemDetailContainer.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const ItemCount = ({stock, initial, onAdd}) => {

    const [cont, setCont] = useState(initial);

    function sumar() {
        if(cont < stock){
            setCont(cont + 1)
        }
    }

    function restar() {
        if(cont > 1){
            setCont(cont - 1)
        }
    }

    return (
        <>
            <div className='btnDetalles'>
                <button className='btn btn-danger' onClick={restar}>
                    -
                </button>
                <p className='stockDetalles' >Cantidad: {cont}</p>
                <button className='btn btn-success' onClick={sumar}>
                    +
                </button>
            </div>
            <button className='btn btn-light' onClick={() => onAdd(cont)}>
                Agregar
            </button>
            {/* <ToastContainer/> */}
        </>
    )
}
