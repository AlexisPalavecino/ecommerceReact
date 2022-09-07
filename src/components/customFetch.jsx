import { TrendingUp } from "@mui/icons-material"

// PROMESA
export const customFech = (products) =>{
    return new Promise((resolve, reject) => {
        let condicion = true
        setTimeout(() =>{
            if (condicion) {
            resolve(products)}else{
                reject('error')
            }}, 2000)
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