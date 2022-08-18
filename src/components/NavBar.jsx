import React from 'react';
import './App.css';
import Form from './Form';

function NavBar() {
  
  return (
    <>
      <nav id="barraNav" className=" navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img className="logoNav" src="../img/logo.jpg" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Inicio
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
                <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Snacks</a>
                  <a className="dropdown-item" href="#">Chocolates</a>
                  <a className="dropdown-item" href="#">Gomitas/Chupetines</a>
                  <a className="dropdown-item" href="#">Alfajores/Galletitas</a>
                  <a className="dropdown-item" href="#">Otros</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Promos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Ubicación</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
            </ul>
            <Form contBuscar = "Productos" />
          </div>
        </div>
      </nav>
    </>
  );
}


export default NavBar;


