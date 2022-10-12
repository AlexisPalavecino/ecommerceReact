
# MateRos - App

Es una pagina tipo e-comerce para la compra de productos artesanales, como Mates, bombillas y porta mates, como así también Termos y accesorios.
En la app se puede naverdad por diferentes secciones, seleccionando el tipo de producto para visualizar y ademas ver el detalle del mismo.
También cuenta con un carrito de compras, donde se puede ir cargando los productos que se desean adquirir para luego firnalizar la compra.

# Caracteristicas
Puede filtrar por categoria o producto que desea ver.
La app es full responsive.
Se utiliza como base de datos firebase, donde se cargan los productos y ordenes.
Es intuitiva para el usuario y facil de navegar.
Los productos se obtienen de una base de datos (firebase).



## Installation

Instalar mi proyecto con npm

```bash
  git clone https://github.com/AlexisPalavecino/ecommerceReact.git
  npm install
  npm start
```
Se debe crear una cuenta en firebase y crear un proyecto.
Luego crear una base de datos para el proyecto con las siguientes colecciones:
productos:
{
   "img": "string",
   "category": "string",
   "detail": "string",
   "price": "number",
   "stock": "number"
   "title": "string",
}

y otra colección llamada "orders"  para guardar las ordenes de compra.

## Librerias
Material UI
React Router DOM


## Demo
https://i.postimg.cc/wBGjT5Qq/React-App-Ecommerce-2022-10-12-20-27-30.gif




## 🚀 About Me
Soy  desarrollador full stack, este es uno de mis proyectos.
Para ver más de mis proyectos, pueden visitar mi repositorio en GitHub:
https://github.com/AlexisPalavecino

