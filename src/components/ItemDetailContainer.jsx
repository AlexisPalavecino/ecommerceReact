import { collection, getDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'
import {db} from '../firebase/firebase'
import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';


export default function ItemDetailContainer() {
  const {id} = useParams();
  const [productDetail, setProductDetail]= useState()
  const [loading, setLoading]= useState(true)

  // const [productDetail, setProductDetail]= useState({})
  // const [loading, setLoading]= useState(true)
  // const {id} = useParams();

  useEffect(()=>{
    //indico la base de datos y en que coleccion esta
    const collectionProducts = collection(db, "products")
    //crear referencia que traida ID del useParams
    const refDoc = doc(collectionProducts,id)
    // traigo documento
    getDoc(refDoc)
    .then((result)=>{
      setProductDetail({
        id:result.id,
        ...result.data()
      })
    })
    .catch((error)=> console.log(error))
    .finally(()=>setLoading(false))
  },[])


  // con custonfech
  // useEffect(()=>{
  //   setLoading(true)
  //   customFech(products)
  //   .then((products)=> setProductDetail(products.find((item)=> item.id === id)))
  //   .catch((error)=> console.log(error))
  //   .finally(()=> setLoading(false))
  // },[id])

  // const ItemDetailList = ({productDetail}) =>{
  //   {productDetail.map((product)=><ItemDetail key={product.id} product={product}/>)}
  // }

    
  return (
    <div >{loading ? <Box sx={{ display: 'flex' }}> <CircularProgress /> </Box> :<ItemDetail productDetail={productDetail}/>} </div>
  )
}
