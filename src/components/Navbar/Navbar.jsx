import { useState } from 'react';
import Name from '../../img/name.svg';
import CartWidget from './CartWidget';
import SearchBar from './SearchBar';
import BurgerMenu from './BurgerMenu';
import { libreriaCategories, cotillonCategories } from '../../data/categories'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [ showMenu, setShowMenu ] = useState(((window.innerWidth < 768) ? false : true));

    const handlerClick = () => {
        setShowMenu(!showMenu);
        console.log(showMenu);
    }

    return (
        <>
        <header className="main-navbar">
            <nav className="navbar">
                <BurgerMenu handlerClick={handlerClick}/>
                <Link to="/">
                    <img src={Name} alt="Logo de Las Condes, Librería y Cotillón." />
                </Link>
                <SearchBar />
                <ul className={showMenu ? "navbar__menu" : "disabled"}>
                    <li className="menu__dropdown">
                        LIBRERÍA
                        <div className="dropdown-content">
                            {
                                libreriaCategories.map((category) => {
                                    return <NavLink key={category.id} to={category.route}>{category.name}</NavLink>
                                })
                            }
                        </div>
                    </li>
                    <li className="menu__dropdown">
                        COTILLÓN
                        <div className="dropdown-content">
                            {
                                cotillonCategories.map((category) => {
                                    return <NavLink key={category.id} to={category.route}>{category.name}</NavLink>
                                })
                            }
                        </div>
                    </li>
                </ul>
                <Link to="/cart"><CartWidget /></Link>
            </nav>
        </header>
    </>
    )
}

export default Navbar