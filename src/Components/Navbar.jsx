import { Link } from 'react-router-dom'
import ThemeButton from './ThemeButton'
import { useCharStates } from '../Context'

const Navbar = () => {
  const { state } = useCharStates();
  return (
    <nav className={!state.theme && "dark-nav"}>
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