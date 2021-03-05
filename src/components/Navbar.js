import { NavbarContainer, Logo } from './NavbarStyle' 
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png' 

export default function Navbar() {
  return (
    <NavbarContainer>
      <Logo src={logo} alt="logo"/>
      <Link to='/' className='exit'>Sair</Link>
    </NavbarContainer>
  )
}