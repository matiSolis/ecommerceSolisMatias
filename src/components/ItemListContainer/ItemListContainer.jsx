import { gFetch } from "../../utils/ItemDetail";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [ loading, setLoading ] = useState(true)
  const {idCategoria} = useParams()

  useEffect(()=>{
    if (idCategoria) {
      gFetch()
        .then(res => {      
          setProductos(res.filter(producto => producto.subCategoria === idCategoria))
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))      
    } else {
      gFetch()
        .then(res => {      
          setProductos(res)
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
      
    }
  }, [idCategoria])


  return (
    loading 
    ? 
      <h2>Cargando...</h2> 
    :  
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 50
      }}>
        {productos.map(producto => <div key={producto.id} className='card w-25 p-3 m-5 '>
                                      <Link to={`/detalle/${producto.id}`}>
                                      <div className='card-header'>
                                            {producto.marca}
                                            <br/>
                                            {producto.modelo}
                                      </div>
                                      <div className='card-body'>
                                            <img className='w-100'src={producto.foto}/>
                                      </div>
                                      <div className='card-footer'>
                                            Precio: u$s {producto.price}
                                      </div>
                                      </Link>
                                    </div>)}
      </div>
  )
}

export default ItemListContainer