import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import {collection, getDocs, query, where} from 'firebase/firestore'
import {db} from '../firebase/firebase'
import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
//import {data} from '../mocks/mockData';
//import Mockdata from '../mocks'

export default function ItemListContainer() {

const [listProducts, setlistProducts]=useState([])
const [loading, setLoading]= useState(false)
const{categoryid} = useParams()

//con firebase
useEffect(()=>{
  setLoading(true)
  const productos = categoryid ?query(collection(db, "products"), where("category", "==", categoryid)) :collection(db, "products")
  getDocs(productos)
  .then((result)=>{
    const list = result.docs.map((products)=>{
      return{
        id:products.id,
        ...products.data()
      }
    })
    setlistProducts(list)
   
})
  .catch((error)=>console.log(error))
  .finally(()=>setLoading(false))
},[categoryid])


// con customFech
// useEffect(()=>{
//   setLoading(true)
//   customFech(Products)
//    .then(res=>{
//     if(categoryid){
//       setlistProducts(res.filter((item)=>item.category === categoryid))
//     }else{
//       setlistProducts(res)
//     }
//   })
//   .catch((error)=> console.log(error))
//   .finally(()=> setLoading(false))
// },[categoryid])
// console.log(listProducts)
  console.log(listProducts)
  return (
    
    <>
       <div className='cardContainer'>
       {loading ?  <Box sx={{ display: 'flex' }}> <CircularProgress /> </Box> :<ItemList listProducts={listProducts} />}
       </div>
    </>
  )
}
