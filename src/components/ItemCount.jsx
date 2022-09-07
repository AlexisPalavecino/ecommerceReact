import React, {useState} from 'react';

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
