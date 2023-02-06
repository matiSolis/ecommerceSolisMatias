import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../utils/ItemDetail"



const ItemDetailContainer = () => {
    const {idProducto} = useParams()
    const [detail, setDetail] = useState([])
    const [ loading, setLoading ] = useState(true)

useEffect(()=>{
    gFetch()
    .then(res => setDetail(res.find(producto => producto.id === idProducto)))
    .catch(error => console.log(error))
    .finally(()=> setLoading(false))
})




    return(
        loading 
        ? 
        <h2>Cargando...</h2> 
        :  
        <div>
            <h3>Detalle del producto: <br/> {detail.descripcion}</h3>
            <br/>
            <h2>Stock disponible: {detail.stock}</h2>
        </div>
    )
}

export default ItemDetailContainer