import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
//import { data } from "../mocks/mockdata";
//import { customFech } from "./customFetch";
import ItemDetail from './ItemDetail'
//import products from "./Products";

const products = [
  {
    id:'1',
    title: "Imperial",
    price: 8000,
    detail:"detalle del producto",
    img:"https://i.ibb.co/9pF0N1Q/mateimperial00.webp",
    category: "Imperiales",
    stock:10,
},
{
    id: '2',
    title: "Camionero",
    price: 3500,
    detail:"detalle del producto",
    img:"https://i.ibb.co/mvCwWPP/matecamionero02.jpg",
    category: "Camionero",
    stock:10,

},
{
    id: '3',
    title: "Torpedo",
    price: 3000,
    detail:"detalle del producto",
    img:"https://i.ibb.co/L9H36Ty/matetorpedo01.jpg",
    category: "Torpedo",
    stock:10,
},
{
    id: '4',
    title: "Termolar",
    price: 11000,
    detail:"detalle del producto",
    img:"https://i.ibb.co/pnQ8sx8/termolar00.jpg",
    category: "Termolar",
    stock:10,
}
]

export default function ItemDetailContainer() {
  const {id} = useParams();
  const [productDetail, setProductDetail]= useState()
  const [loading, setLoading]= useState(true)

  // const [productDetail, setProductDetail]= useState({})
  // const [loading, setLoading]= useState(true)
  // const {id} = useParams();

  useEffect(()=>{
    setLoading(true)
    //customFech(products)
    .then((products)=> setProductDetail(products.find((item)=> item.id === id)))
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  },[id])

  // const ItemDetailList = ({productDetail}) =>{
  //   {productDetail.map((product)=><ItemDetail key={product.id} product={product}/>)}
  // }

    
  return (
    <div >{loading ? <p>Cargando...</p> :<ItemDetail productDetail={productDetail}/>} </div>
  )
}
