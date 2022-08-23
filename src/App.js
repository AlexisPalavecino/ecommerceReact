import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { ThemeProvider } from '@mui/material';
import theme from './themeConfig'

function App() {
  const saludo = 'Hola Profe'
  return (
   
    <ThemeProvider theme = {theme}>
      < NavBar />
      <ItemListContainer saludar = {saludo}/>
    
    </ThemeProvider>
    
  );
}

export default App;
