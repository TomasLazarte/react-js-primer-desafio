import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import '../App.css'

export const CardWidget = () => {
    return (
        <div>
            <button className="btn btn-light" ><FaCartPlus/></button>
        </div>
    );
}
