import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function BurgerMenu() {
  return (
    <div className="navbar__burger-menu">
        <MenuIcon className="burger-menu__open" />
        <CloseIcon className="burger-menu__close" />
    </div>
  )
}

export default BurgerMenu
