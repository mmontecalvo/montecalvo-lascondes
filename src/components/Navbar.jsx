import Name from '../img/name.svg';
// import Logo from '../img/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <header className="main-navbar">
            <nav className="navbar">
                <img src={Name} alt="Logo de Las Condes, Librería y Cotillón." />
                <div className="navbar__search">
                    <SearchIcon className="search__icon"/>
                    <input placeholder="Buscar..." type="search" className="search__input" />
                </div>
                <div className="navbar__menu">
                    <button>LIBRERÍA</button>
                    <button>COTILLÓN</button>
                </div>
                <CartWidget />
            </nav>
        </header>
    )
}

export default Navbar