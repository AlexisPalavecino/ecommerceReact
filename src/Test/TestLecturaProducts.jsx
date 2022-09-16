//@ts-check

// import React,{useState, useEffect} from 'react';
// import {getFirestore, doc, collection, getDoc} from 'firebase/firestore'

// export default function TestLecturaProducts() {
// const [producto, setProducto] = useState({});
// useEffect(()=>{
//     const db=getFirestore();
//     const productRef = doc(db, 'products', 'id');
//     getDoc(productRef).then((res)=>){
//         const miObj = {...res.data(),id: res.id};
//         setProducto(miObj);
//     }
// }, []);


//   return (
//     <div>id : {producto.id}</div>
//   )
// }
