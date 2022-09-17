import { Children, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({Children});
    const [cart, setCart] =useState([]);
    const addItem = (item) =>{
        const existsInCart = cart.find((prod)=> prod.id === id)
          if(existsInCart){
            const cartAct = cart.map((pord)=>{
                if(prod.id === item.id){
                    return{... prod, quantuty:prod.quantity + item.quantity}
                }else{
                    return prod
                }
            })
            setCart(cartAct)
          }else{
            setCart([...cart, item])   
          }      
        }  
        
    

    const clear = () =>{
        setCart([])
    }
    const removeItem = (id) =>{
       setCart(cart.filter((prod)=> prod.id !== id)) 
    }
    const isInCart = (id) =>{
        return cart.some((prod)=> prod.id === id)
    }

export const CartProvider = () =>{

    return(
        <CartContext.Provider value={{cart, clear, isInCart, removeItem, addItem}}>
            {Children}
        </CartContext.Provider>
    )

}

export const useCart=()=> useContext(CartContext)