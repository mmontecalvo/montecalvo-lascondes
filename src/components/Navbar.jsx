import Name from '../img/name.svg';
// import Logo from '../img/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import CartWidget from './CartWidget';
import BurgerMenu from './BurgerMenu';
import { libreriaCategories, cotillonCategories } from '../data/categories'

const Navbar = () => {
    return (
        <>
        <header className="main-navbar">
            <nav className="navbar">
                <BurgerMenu />
                <img src={Name} alt="Logo de Las Condes, Librería y Cotillón." />
                <div className="navbar__search">
                    <SearchIcon className="search__icon"/>
                    <input placeholder="Buscar..." type="search" className="search__input" />
                </div>
                <ul className="navbar__menu">
                    <li className="menu__dropdown">
                        <a>LIBRERÍA</a>
                        <div className="dropdown-content">
                            {
                                libreriaCategories.map((category) => {
                                    return <a key={category.id} href={category.href}>{category.name}</a>
                                })
                            }
                        </div>
                    </li>
                    <li className="menu__dropdown">
                        <a>COTILLÓN</a>
                        <div className="dropdown-content">
                            {
                                cotillonCategories.map((category) => {
                                    return <a key={category.id} href={category.href}>{category.name}</a>
                                })
                            }
                        </div>
                    </li>
                </ul>
                <CartWidget />
            </nav>
        </header>
    </>
    )
}

export default Navbar