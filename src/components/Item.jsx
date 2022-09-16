//import { padding } from '@mui/system'
import React from 'react'
import ItemCount from './ItemCount'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';


const Item = ({product}) => {

  const{ id, img, price, title, stock, detail, category} = product
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
      <Button variant="contained" color="success" size="small" onClik={()=> navegar(`/detalle/${id}`)}>Ver Mas</Button>
      
      
    </div>
  )
}

export default Item