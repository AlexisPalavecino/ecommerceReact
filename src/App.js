import { useState } from "react";
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { ThemeProvider } from '@mui/material';
import theme from './themeConfig'
import ItemCount from './components/ItemCount';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";



function App() {
  const saludo = 'Desafio Item y promesas!!!!'

  const [valorInicial, setvalorInicial] = useState(3);
  const [stock, setStock] = useState(10)
  

  const onAdd =() =>{
    if (valorInicial < stock){
      setvalorInicial(valorInicial + 1);
      }else{
          alert('No tenemos más stock')
      }
  }
  const restar =() =>{
    if (valorInicial > 0){
      setvalorInicial(valorInicial - 1);  
  }
  }
  //const stock = 10
  return (
   
    <ThemeProvider theme = {theme}>
      
      {/* <ItemListContainer saludar = {saludo}/> */}
      {/* <ItemCount valorInicial={valorInicial} stock={stock} onAdd={onAdd} restar={restar}/> */}
    {/* <Productos />  */}
      <BrowserRouter>
      < NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:idCategory" element={<ItemListContainer />}/>
          <Route path="/product/:idProduct" element={<ItemDetailContainer />}/>
        </Routes>
        <ItemCount valorInicial={valorInicial} stock={stock} onAdd={onAdd} restar={restar}/>
      </BrowserRouter>

      
      
    
    </ThemeProvider>
    
  );
  }


export default App;
