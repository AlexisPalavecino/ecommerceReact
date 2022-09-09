import { useState } from "react";
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { ThemeProvider } from '@mui/material';
import theme from './themeConfig'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Test from './Test/Test';

//export const contexto = createContext();



function App() {
  const saludo = 'Desafio Item y promesas!!!!'

  
  return (
    //<contexto.Provider value={{ color, setColor }}>

    <ThemeProvider theme = {theme}>
      
      {/* <ItemListContainer saludar = {saludo}/> */}
      {/* <ItemCount valorInicial={valorInicial} stock={stock} onAdd={onAdd} restar={restar}/> */}
    {/* <Productos />  */}
      <BrowserRouter>
      < NavBar />
        <Routes>
           <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:categoryid" element={<ItemListContainer />}/>
          <Route path="/detalle/:id" element={<ItemDetailContainer />}/>
          
        </Routes>
       
      </BrowserRouter>

      
      
    
    </ThemeProvider>
    //</contexto.Provider>
    
  );
  }


export default App;
