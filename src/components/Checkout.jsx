import React, {useState} from 'react'
import { Button } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc, getFirestore } from "firebase/firestore";
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';




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
        let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        let validName = String
       if (validEmail.test(email) || validName.test(name)){
            
        const db =getFirestore();
        const orders = collection(db, 'orders');
        addDoc(orders, order).then(( {id} ) => {
            setOrderId(id)})
       } else{
        alert('El email no es correcto')
        alert('Ingrese su nombre')
        alert('Ingrese su telefono')
       }
    }

  return (
    <>
    {orderId? "GRACIAS POR TU COMPRA. TU NUMERO DE ORDEN ES: " + orderId : 
    <div>
        <h3>Para terminar la compra por favor ingrese los siguientes datos:</h3>
    <Box      component="form"      sx={{        '& > :not(style)': { m: 1, width: '25ch' },      }}      noValidate      autoComplete="off"> 
      <TextField id="outlined-basic" label="Nombre" variant="outlined" onChange={(e)=>setName(e.target.value)}/>
      <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)}/>
      <TextField id="outlined-basic" label="Telefono" variant="outlined" onChange={(e)=>setPhone(e.target.value)}/>
    
    </Box>
        
        <Button onClick={validateForm}> FINALIZAR COMPRA </Button>



    </div>}
    </>
  )
}
