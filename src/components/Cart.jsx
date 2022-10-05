import React from 'react'
import { useNavigate } from 'react-router-dom'
//import { useContext } from 'react'
//import { CartContext } from '../context/CartContext'
import { useCart } from '../context/CartContext'
import { Button } from '@mui/material'
import CartItem from './CartItem'

export default function Cart() {
    //const{cart} = useContext(CartContext)
    const{cart, cartTotal, clear}=useCart()
    const navegar= useNavigate()
    
  return (
    <div>
      {
        !cart.length
        ?<div> 
          <h2>Tu carrito está vacio</h2>
          <h4>Te invitamos a ver nuestros productos</h4>
          <Button variant="contained" color="success" onClick={()=>navegar('/')}>Ir a comprar</Button>
        </div>
        :<div> 
          <h2>Tu Carrito</h2>
          {cart.map((compra)=> <CartItem key={compra.id} compra={compra}/>)}
          <span>Total a pagar: ${cartTotal()}</span>
          <div>
          <Button onClick={clear}>Vaciar carrito</Button>
          <Button onClick={()=>navegar(`/checkout`)}>Terminar Compra</Button>
          </div>

        </div>
      }
    </div>
  )
}
