import { Button } from '@mui/material';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from "react-router-dom"



export default function ItemCount({item}) {
  const[count, setCount]= useState(1)
  const [initial, setInitial] = useState(1);
  const [stock, setStock] = useState(10)
  const {addItem}=useCart()
  const [compra, setCompra]= useState(false)
  const navergar = useNavigate()

  const onAdd = ({id, title, price, stock,img })=>{
    let purchase = {id, title,price,stock,img, quantity:count}
    setCompra(true)
    addItem(purchase)
  }
  
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
        <Button variant="outlined" color="success" onClick={()=>onAdd(item)}>Comprar</Button>
        
    </>
  )
}

// export default function ItemCount() {
//   const [valorInicial, setvalorInicial] = useState(0);
//   const [stock, setStock] = useState(10)
  
//   const onAdd =() =>{
//     if (valorInicial < stock){
//       setvalorInicial(valorInicial + 1);
//       }else{
//           alert('No tenemos más stock')
//       }
//   }
//   const restar =() =>{
//     if (valorInicial > 0){
//       setvalorInicial(valorInicial - 1);  
//   }
//   }
  
//   const agregar = () =>{
//     alert(`Se agregaron ${valorInicial}`);
 
//   };


//     return (
//     <div>
//         <h1>Productos:{valorInicial}</h1>
//         <Button variant="contained" color="success" size="small"onClick={onAdd}
//         >+</Button>
        
//          <Button variant="contained" color="success" size="small"onClick={restar}
            
//         >-</Button> <br />

//         <Button variant="outlined" color="success" onClick={()=>{
//             if (valorInicial > 0){
//                agregar();
//                     }
//         }}>Agregar al Carrito</Button>
//     </div>
//   )
// }