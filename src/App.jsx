import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>          
            <Route path='/detalle/:idProducto' element={<ItemDetailContainer/>}/>
            <Route  path='/cart' element={<CartContainer/>}/>
            <Route path='*' element={<Navigate to='/'/>} />
          </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}
export default App
