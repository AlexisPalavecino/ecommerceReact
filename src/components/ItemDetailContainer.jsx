import React from 'react'
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {

    const {idCategory, idProduct} = useParams();
  return (
    <div>ItemDetailContainer</div>
  )
}
