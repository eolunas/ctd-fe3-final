import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
    <ul>
      <li>
        <Link to="/">Inicio</Link> 
      </li>
      <li>
        <Link to="/contact">Contacto</Link> 
      </li>
      <li>
        <Link to="/favs">Destacados</Link> 
      </li>
    </ul>
    <button>Theme</button>
  </nav>
  )
}

export default Navbar