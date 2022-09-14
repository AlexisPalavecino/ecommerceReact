import React, {useState} from 'react';
import { Button } from '@mui/material';
import Alert from '@mui/material';
import AlertTitle from '@mui/material';
import Stack from '@mui/material';


export default function ItemCount() {
  const [valorInicial, setvalorInicial] = useState(0);
  const [stock, setStock] = useState(10)
  
  const onAdd =() =>{
    if (valorInicial < stock){
      setvalorInicial(valorInicial + 1);
      }else{
          alert('No tenemos más stock')
      }
  }
  const restar =() =>{
    if (valorInicial > 0){
      setvalorInicial(valorInicial - 1);  
  }
  }
  
  const agregar = () =>{
    alert(`Se agregaron ${valorInicial}`);
 
  };


    return (
    <div>
        <h1>Productos:{valorInicial}</h1>
        <Button variant="contained" color="success" size="small"onClick={onAdd}
        >+</Button>
        
         <Button variant="contained" color="success" size="small"onClick={restar}
            
        >-</Button> <br />

        <Button variant="outlined" color="success" onClick={()=>{
            if (valorInicial > 0){
               agregar();
                    }
        }}>Agregar al Carrito</Button>
    </div>
  )
}
