import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>          
        <Route path='/detalle/:idProducto' element={<ItemDetailContainer/>}/>

        <Route path='*' element={<Navigate to='/'/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
