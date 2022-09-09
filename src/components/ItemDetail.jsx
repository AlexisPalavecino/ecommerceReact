//import { padding } from '@mui/system'
import React from 'react'
import ItemCount from './ItemCount'
import products from './Products'
import { useNavigate } from 'react-router-dom'

const ItemDetail = (productDetail) => {

  const{ id,img, price, title, stock, detail, category} = products
  const navegar = useNavigate()
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
      <ItemCount />
      <div>
        <button onclik={()=> navegar(`/detalle/${id}`)}>Ver Mas</button>
      </div>
    </div>
  )
}

export default ItemDetail