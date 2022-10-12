import { useContext, useState, useEffect } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const protuctLocalStorage = JSON.parse(localStorage.getItem('cart')|| '[]')

export const CartProvider = ({children}) =>{
    const [cart, setCart] =useState(protuctLocalStorage);
    const addItem = (item) =>{
        const existsInCart = cart.find((prod)=> prod.id === item.id)
          if(existsInCart){
            const cartAct = cart.map((prod)=>{
                if(prod.id === item.id){
                    return{...prod, quantity:prod.quantity + item.quantity}
                }else{
                    return prod
                }
            })
            setCart(cartAct)
          }else{
            setCart([...cart, item])   
          }      
        }  
        
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
    
    
    }, [cart])
    

    const clear = () =>{
        setCart([])
    }
    const removeItem = (id) =>{
       setCart(cart.filter((prod)=> prod.id !== id)) 
    }
    const isInCart = (id) =>{
        return cart.some((prod)=> prod.id === id)
    }

    const cartQuantity =() =>{
        return cart.reduce((acc, prod)=> acc +=prod.quantity,0)

    }

    const cartTotal =() =>{
        return cart.reduce((acc, prod)=> acc += prod.price * prod.quantity,0)
      

    }
    
    


        return(
                    <CartContext.Provider value={{cart, clear, isInCart, removeItem, addItem, cartQuantity, cartTotal}}>
                        {children}
                    </CartContext.Provider>
                )
}


export const useCart=()=> useContext(CartContext);