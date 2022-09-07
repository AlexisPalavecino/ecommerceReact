import { useState } from "react";
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { ThemeProvider } from '@mui/material';
import theme from './themeConfig'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Test from './Test/Test';




function App() {
  const saludo = 'Desafio Item y promesas!!!!'

  
  return (
   
    <ThemeProvider theme = {theme}>
      
      {/* <ItemListContainer saludar = {saludo}/> */}
      {/* <ItemCount valorInicial={valorInicial} stock={stock} onAdd={onAdd} restar={restar}/> */}
    {/* <Productos />  */}
      <BrowserRouter>
      < NavBar />
        <Routes>
          <Route path="/test" element={<Test />}/>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:idCategory" element={<ItemListContainer />}/>
          <Route path="/product/:idProduct" element={<ItemDetailContainer />}/>
        </Routes>
       
      </BrowserRouter>

      
      
    
    </ThemeProvider>
    
  );
  }


export default App;
