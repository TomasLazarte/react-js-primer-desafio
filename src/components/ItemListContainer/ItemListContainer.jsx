import React from 'react';

export const ItemListContainer = ({saludo}) => {

    return (
        <div className="container">
            <h1>Hola, somos {saludo}, delivery de kiosco.</h1>
            <h3>Hacemos envíos de 18 a 00hs</h3>
        </div>
    );
}
