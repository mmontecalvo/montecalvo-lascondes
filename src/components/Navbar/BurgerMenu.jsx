import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function BurgerMenu({handlerClick}) {
  const [ openMenu, setOpenMenu ] = useState(false);

  const clickMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <div className="navbar__burger-menu" onClick={handlerClick}>
      {
        openMenu ? (
          <CloseIcon className="burger-menu__close" onClick={clickMenu}/>
          ) : (
          <MenuIcon className="burger-menu__open" onClick={clickMenu}/>
        )
      }
    </div>
  )
}

export default BurgerMenu
