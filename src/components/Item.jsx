import React from 'react'


function Item({product}) {
  return (
    <div>
      <h3>{product.title}</h3>
      <img src={product.pictureUrl} alt={product.title} />
			<div>$ {product.price}</div>
			<div>Stock : {product.stock}</div>
			<div>
				{product.detail}
			</div>
    </div>
  )
}

export default Item