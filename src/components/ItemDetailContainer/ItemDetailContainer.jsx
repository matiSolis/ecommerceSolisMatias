import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../itemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {idProduct} = useParams()
    useEffect(()=>{        
        const db = getFirestore() 
        const query = doc(db, 'Products', idProduct)
        getDoc(query)
        .then(resp => setProduct( { id: resp.id, ...resp.data() } ))
        .catch(error => setProduct(error))
},[])
    return(
            <div >
                <ItemDetail product={product}/>
            </div>
    )
}
export default ItemDetailContainer