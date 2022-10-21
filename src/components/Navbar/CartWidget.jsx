import { useContext } from 'react';
import { Context } from '../../context/CartContext';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

function CartWidget() {

  const { quantity } = useContext(Context);

  return (
    <div className="navbar__shoppingCart" >
      <ShoppingCartTwoToneIcon className="shoppingCart__icon" sx={{ fontSize: 40, color: '#00A19A'}}/>
      {
        quantity > 0 && <div className="shoppingCart__info">{quantity}</div>
      }
    </div>
  )
}

export default CartWidget


