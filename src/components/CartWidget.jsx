import React from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useCart } from '../context/CartContext';

const CartWidget = ({counter}) => {
  const{cartQuantity}=useCart()

  return (
    <div>
    <ShoppingCartCheckoutIcon/>
    {/*condicional para no mostrar cartQuantity sino tiene compras realizadas */}
    <span>{cartQuantity() || ''}</span> 
    </div>
  )
}

export default CartWidget

