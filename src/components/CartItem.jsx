import React from 'react'
import { useCart } from '../context/CartContext'
import { Button } from '@mui/material'

const CartItem = ({compra}) => {
    const{removeItem}=useCart()
  return (
    <div>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'2rem'}}>
            <img src={compra.img} alt={compra.name} style={{width:'10rem'}}/>
            <span>{compra.title}</span>
            <span>{compra.quantity}</span>
            <span>{compra.price}</span>
            <Button onClick={()=>removeItem(compra.id)}>X</Button>
            </div>  
    </div>
  )
}

export default CartItem