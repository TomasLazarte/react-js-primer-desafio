import {React, useState} from 'react';
import '../ItemDetailContainer/ItemDetailContainer.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    function add() {
        if(count < stock){
            setCount(count + 1)
        }
    }

    function decrease() {
        if(count > 1){
            setCount(count - 1)
        }
    }

    return (
        <>
            <div className='btnDetail'>
                <button className='btn btn-danger' onClick={decrease}>
                    -
                </button>
                <p className='stockDetail' >Cantidad: {count}</p>
                <button className='btn btn-success' onClick={add}>
                    +
                </button>
            </div>
            <button className='btn btn-light' onClick={() => onAdd(count)}>
                Agregar
            </button>
            {/* <ToastContainer/> */}
        </>
    )
}
