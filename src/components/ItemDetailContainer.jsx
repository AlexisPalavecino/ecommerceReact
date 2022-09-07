import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { customFech } from "./customFetch";
import Products from './Products';
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {

  const [productDetail, setProductDetail]= useState({})
  const [loading, setLoading]= useState(true)
  const {idProduct} = useParams();

  useEffect(()=>{
    customFech
    .then((res)=> setProductDetail(res.find((item)=> item.id === idProduct)))
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  },[idProduct])

    
  return (
    <div>{loading ? <p>Loading...</p> : <ItemDetail productDetail={productDetail}/>}</div>
  )
}
