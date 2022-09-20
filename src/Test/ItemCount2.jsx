import { Button } from '@mui/material';
//import { useState } from 'react';


export default function ItemCount2({initial, stock, onAdd, count, setCount}) {
  
 
  const restar =() =>{
    if (count > initial){
      setCount(count - 1);  
  }
  }
  
  const sumar = () =>{
    if (count < stock){
        setCount(count + 1);  
    }
 
  }


    return (
    <>
    <div>
        
        <Button variant="contained" color="success" size="small"onClick={sumar}>+</Button>
        <span>Productos:{count}</span>
         <Button variant="contained" color="success" size="small"onClick={restar}>-</Button> <br />
    </div>
        <Button variant="outlined" color="success" onClick={onAdd}>Comprar</Button>
    </>
  )
}