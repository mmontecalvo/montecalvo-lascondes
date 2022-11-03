import { useState, useContext } from 'react';
import Name from '../../img/name.svg';
import CartWidget from './CartWidget';
import SearchBar from './SearchBar';
import BurgerMenu from './BurgerMenu';
import PurchaseSearch from './PurchaseSearch';
import { Link, NavLink } from 'react-router-dom';
import { Context } from '../../context/CategoriesContext';

const Navbar = () => {
    const [ showMenu, setShowMenu ] = useState(((window.innerWidth < 768) ? false : true));

    const handlerClick = () => {
        setShowMenu(!showMenu);
    }

    const { categories } = useContext(Context);

    const libraryCategories = categories.filter( c => c.category === 'Librería' ).sort((c1, c2) => {
        if(c1.name < c2.name){
            return -1;
        } else if(c1.name > c2.name){
            return 1;
        } else {
            return 0;
        }
    });
    const cotillonCategories = categories.filter( c => c.category === 'Cotillón' ).sort((c1, c2) => {
        if(c1.name < c2.name){
            return -1;
        } else if(c1.name > c2.name){
            return 1;
        } else {
            return 0;
        }
    });

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
                                libraryCategories.map((category) => {
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
                <PurchaseSearch />
            </nav>
        </header>
    </>
    )
}

export default Navbar