import React, {useState} from 'react'
import { Button } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc, getFirestore } from "firebase/firestore";


export default function Checkout() {
    const {cart, cartTotal} =useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [orderId, setOrderId] = useState("");

    function validateForm(){
        const order = {
            buyer: {name, phone, email},
            cart,
            //cartTotal, me lo toma como función y no como un string
            
        };
        console.log(order);
        //FALTA VALIDAR
        const db =getFirestore();
        const orders = collection(db, 'orders');
        addDoc(orders, order).then(( {id} ) => {
            setOrderId(id)})
    }

  return (
    <>
    {orderId? "GRACIAS POR TU COMPRA. TU NUMERO DE ORDEN ES: " + orderId : 
    <div>
        <h3>Para terminar la compra por favor ingrese los siguientes datos:</h3>
        <input type="text" placeholder='Ingrese su Nombre' onChange={(e)=>setName(e.target.value)}/> <br />
        <input type="email" placeholder='Ingrese su email' onChange={(e)=>setEmail(e.target.value)} /> <br />
        <input type="phone" placeholder='Ingrese su telefono' onChange={(e)=>setPhone(e.target.value)}/> <br />

        <button onClick={validateForm}> FINALIZAR COMPRA </button>



    </div>}
    </>
  )
}
