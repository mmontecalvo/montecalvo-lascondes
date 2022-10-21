import Name from '../../img/name.svg';
import SearchIcon from '@mui/icons-material/Search';
import CartWidget from './CartWidget';
import BurgerMenu from './BurgerMenu';
import { libreriaCategories, cotillonCategories } from '../../data/categories'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const desafioCtg = [
        {
            id: 0,
            name: "electronics",
            route: "categoría/electronics"
        },
        {
            id: 1,
            name: "jewelery",
            route: "categoría/jewelery"
        },
        {
            id: 2,
            name: "men's clothing",
            route: "categoría/men's clothing"
        },
        {
            id: 3,
            name: "women's clothing",
            route: "categoría/women's clothing"
        },
    ]

    return (
        <>
        <header className="main-navbar">
            <nav className="navbar">
                <BurgerMenu />
                <Link to="/">
                    <img src={Name} alt="Logo de Las Condes, Librería y Cotillón." />
                </Link>
                <div className="navbar__search">
                    <SearchIcon className="search__icon"/>
                    <input placeholder="Buscar..." type="search" className="search__input" />
                </div>
                <ul className="navbar__menu">
                    <li className="menu__dropdown">
                        DESAFÍO
                        <div className="dropdown-content">
                            {
                                desafioCtg.map((category) => {
                                    return <NavLink key={category.id} to={category.route}>{category.name}</NavLink>
                                })
                            }
                        </div>
                    </li>
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