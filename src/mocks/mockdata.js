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
  // PROMESA

    export const data = new Promise((resolve, reject) => {
        let condicion = true
        setTimeout(() =>{
            if (condicion) {
            resolve(products)}else{
                reject('error')
            }}, 2000)
        }
    )
