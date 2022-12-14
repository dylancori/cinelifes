import { Link } from 'react-router-dom';
import './NavBar.css';


export const NavBar = ({menus,generos}) =>{
    return(
      <div className='navbar'>
    {
      menus.map((menu)=>{
        return <Link className='navbar__menu' to={menu.href}>{menu.name}</Link>
    })
    
    }
    {
      generos.map((genero)=>{
        return <Link className='navbar__menu' to={`/generos/${genero.id}`}>{genero.nombre}</Link>
    })
    
    }
    
    </div>
    
    );
}

export default NavBar;