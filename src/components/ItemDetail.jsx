import { padding } from '@mui/system'
import React from 'react'
import ItemCount from './ItemCount'


function ItemDetail({product}) {

  
  return (
    // <div style={{border:'3px solid green', borderRadius:'5px'}}>
    <div className='cardDetail'>
      
      <img style={{height:'200px', margin:'10px', padding:'10px'}}src={product.img} alt={product.category} />
      <div><h3>{product.title}</h3></div>
			<div>$ {product.price}</div>
			<div>Stock : {product.stock}</div>
			<div>
				{product.detail}
			</div>
      <ItemCount />
    </div>
  )
}

export default ItemDetail