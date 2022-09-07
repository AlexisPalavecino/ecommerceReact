import React from 'react'
import ItemDetail from './ItemDetail'

const ItemList = ({listProducts}) => {

  return (
    <>
    {listProducts.map ((product)=> <ItemDetail key={product.id} product={product} />)}
    </>
  )
}

export default ItemList