import React from 'react';
import './NavBar.scss'
import { Link } from 'react-router-dom';
import {CartWidget} from './CartWidget';
import Form from './Form';
function NavBar() {
  
  return (
    <>
      <nav id="navBar" className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link to={'/'} ><img className="navLogo" src="../../img/logo.jpg" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse nav-items" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to={'/'} className="nav-link">Inicio</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
                <div className="dropdown-menu">
                  <Link to={'/category/chocolates'} className="dropdown-item" >Chocolates</Link>
                  <Link to={'/category/postres'} className="dropdown-item" >Postres</Link>
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
            <Form placeholder = "Productos" />
          </div>
          <div className="cartContainer">
              <Link to={'/cart'}><CartWidget /></Link>
          </div>
        </div>
      </nav>
    </>
  );
}


export default NavBar;


