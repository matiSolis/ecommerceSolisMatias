import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const {idProducto} = useParams()
    const [producto, setProducto] = useState({})
    useEffect(()=>{        
        const db = getFirestore() 
        const query = doc(db, 'Productos', idProducto)
        getDoc(query)
        .then(resp => setProducto( { id: resp.id, ...resp.data() } ))
        .catch(error => setProducto(error))
},[])
    return(
            <div >
                <ItemDetail producto={producto}/>
            </div>
    )
}
export default ItemDetailContainer