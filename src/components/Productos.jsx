import React,{useState, useEffect} from 'react';

export default function Productos() {
  
  //let contador = 0;
  const [contador, setContador] = useState(0);
    return (
    <div>
        <h1>Contador: {contador} </h1>
        <button onClick={()=>{
            //contador = contador ++;
            setContador(contador + 1);
            console.log(contador);
        }}>Sumar</button>
    </div>
  )
}
