//import { padding } from '@mui/system'
//import ItemCount from './ItemCount'
import { Button } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ItemCount2 from "../Test/ItemCount2"




const ItemDetail = ({productDetail}) => {
  const[count, setCount]= useState(1)
  const [compra, setCompra]= useState(false)
  const navergar = useNavigate()
  const{id, img, price, title, stock, detail, category} = productDetail

  const onAdd = ()=>{
    console.log('compraste ${count} items del producto ${name}')
    setCompra(true)
  }

return (
    // <div style={{border:'3px solid green', borderRadius:'5px'}}>
    <div className='cardDetail'>
      
      <img style={{height:'200px', margin:'10px', padding:'10px'}}src={img} alt={category} />
      <div><h3>{title}</h3></div>
			<div>$ {price}</div>
			<div>Stock : {stock}</div>
			<div>
				{detail}
			</div>
      {!compra ? <ItemCount2 stock={stock} initial={1} onAdd={onAdd} count={count} setCount={setCount}/> :
        <div>
        <Button onClick={()=>navergar('/cart')}> Ir al carrito</Button>
        <Button onClick={()=>navergar('/')}> Seguir comprando</Button>
      </div>}
    </div>
  )
}

export default ItemDetail