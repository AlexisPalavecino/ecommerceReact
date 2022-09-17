
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { ThemeProvider } from '@mui/material';
import theme from './themeConfig'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Test from './Test/Test';
import TestLecturaProducts from "./Test/TestLecturaProducts";
import Cart from "./components/Cart";
import {CartProvider} from './context/CartContext'

//export const contexto = createContext();



function App() {
  
  
  return (
    <CartProvider>

    <ThemeProvider theme = {theme}>
      
      <BrowserRouter>
      < NavBar />
        <Routes>
        {/* <Route path="/Test" element={<TestLecturaProducts />}/> */}
           <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:categoryid" element={<ItemListContainer />}/>
          <Route path="/detalle/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart/>}/>
          
        </Routes>
       
      </BrowserRouter>

      
      
    
    </ThemeProvider>
    </CartProvider>
    
  );
  }


export default App;
