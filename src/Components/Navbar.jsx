import { Link } from 'react-router-dom'
import ThemeButton from './ThemeButton'
import { useCharStates } from '../Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme } = useCharStates();
  return (
    <nav className={theme == "dark" && "dark-nav"}>
    <div className='logo-container'>
      <span><span className='contraste'>D</span>H Odonto</span>
    </div>
    <div className='routes-container'>
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
      <ThemeButton />
    </div>
  </nav>
  )
}

export default Navbar