// PROMESA
export const customFech = (products) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(products)}, 2000)
    }
)}

// customFech
// //salió bien entonces...
// .then ((res)=> {
//     console.log(customFech);
// })
// // salio mal entonces ...
// .catch ((err)=> {
//     console.log(customFech);
// });