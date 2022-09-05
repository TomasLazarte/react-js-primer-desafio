import {React, useState} from 'react';
import '../App.css';

export const ItemCount = ({stock, agregar, inicial}) => {

    const [cont, setCont] = useState(inicial);

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
        <></>
        // <div className='container objeto d-block'>
        //     <img src="../img/franui.png"/>
        //     <h3>Fra Nui</h3>
        //     <p>Stock: {stock}</p>
        //     <div className='botones'>
        //         <button className='btn btn-danger' onClick={restar}>
        //             -
        //         </button>
        //         <p className='cantidad'>Cantidad: {cont}</p>
        //         <button className='btn btn-success' onClick={sumar}>
        //             +
        //         </button>
        //     </div>    
        //     <button className='btn btn-light' onClick={() => agregar(cont)}>
        //         Agregar
        //     </button> 
        // </div>
    )
}
