import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
//import { data } from "../mocks/mockdata";
import { customFech } from "./customFetch";
import ItemDetail from './ItemDetail'
import products from "./Products";



export default function ItemDetailContainer() {

  const [productDetail, setProductDetail]= useState({})
  const [loading, setLoading]= useState(true)
  const {id} = useParams();

  useEffect(()=>{
    setLoading(true)
    customFech(products)
    .then((res)=> setProductDetail(res.find((item)=> item.id === id)))
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  },[id])

  // const ItemDetailList = ({productDetail}) =>{
  //   {productDetail.map((product)=><ItemDetail key={product.id} product={product}/>)}
  // }

    
  return (
    <div >{loading ? <p>Cargando...</p> :<ItemDetail ProductDetail={productDetail}/>} </div>
  )
}
