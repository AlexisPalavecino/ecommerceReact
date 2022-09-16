import React from 'react'
import Item from './Item'
import { useNavigate } from 'react-router-dom'

const ItemList = ({listProducts}) => {
  const navegar = useNavigate()
  return (
    <>
    <div className='cardContainer'>
    {listProducts.map ((product)=> <Item key={product.id} product={product} />)}
    </div>
    </>
  )
}

export default ItemList