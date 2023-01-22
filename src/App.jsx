import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting= 'PROXIMAMENTE TIENDA DE BUCEO...'/>
    </>
  )
}

export default App
