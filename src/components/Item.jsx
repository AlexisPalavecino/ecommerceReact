//import { padding } from '@mui/system'
import React from 'react'
import ItemCount from './ItemCount'
//import { Link, RouterLink} from 'react-router-dom'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'




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
      <ItemCount/>
      <Button variant="contained" color="success" size="small" onClick={()=>navegar(`/detalle/${id}`)}>Ver Mas</Button>
      {/* <Link variant="contained" color="success" size="small" to={`/detalle/${id}`}>Ver Mas</Link> */}
      
      
    </div>
  )
}

export default Item