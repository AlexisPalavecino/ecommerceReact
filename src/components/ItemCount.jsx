import React, {useState} from 'react';

export default function ItemCount({valorInicial, restar, onAdd}) {
  

  const agregar = () =>{
    alert(`Se agregaron ${valorInicial}`);
  };
    return (
    <div>
        <h1>Contador:{valorInicial}</h1>
        <button onClick={onAdd}
        >sumar</button>
        
         <button onClick={restar}
            
        >Restar</button> <br />

        <button onClick={()=>{
            if (valorInicial > 0){
               agregar();
             }
        }}>Agregar al Carrito</button>
    </div>
  )
}
