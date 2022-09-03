import React, {useEffect, useState} from 'react';
// import { useParams } from 'react-router-dom';
import { customFech } from './customFetch';
import ItemList from './ItemList';
import Products from './Products';

export default function ItemListContainer({saludar}) {
  // const {idCategory, idProduct} = useParams();
  
  // useEffect(()=>{
  //   if (!idCategory){

  //   }else{

  //   }
  // },[idCategory]
  // );

const [listProducts, setlistProducts]=useState([])
  useEffect(()=>{
  customFech(Products)
  .then(data=>setlistProducts(data))
},[])
console.log(listProducts)
  
  return (
    
    <>
        <p>{saludar}</p>
       <ItemList listProducts={listProducts} /> 
    </>
  )
}
