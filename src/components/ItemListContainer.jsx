import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { customFech } from './customFetch';
import ItemList from './ItemList';
import Products from './Products';
//import {data} from '../mocks/mockdata';

export default function ItemListContainer() {

const [listProducts, setlistProducts]=useState([])
const [loading, setLoading]= useState(false)
const{categoryid} = useParams()

  useEffect(()=>{
  setLoading(true)
  customFech(Products)
  //data
  .then(res=>{
    if(categoryid){
      setlistProducts(res.filter((item)=>item.category === categoryid))
    }else{
      setlistProducts(res)
    }
  })
  .catch((error)=> console.log(error))
  .finally(()=> setLoading(false))
},[categoryid])
console.log(listProducts)
  
  return (
    
    <>
       <div className='cardContainer'>
       {loading ? <p>Loading...</p> :<ItemList listProducts={listProducts} />}
       </div>
    </>
  )
}
