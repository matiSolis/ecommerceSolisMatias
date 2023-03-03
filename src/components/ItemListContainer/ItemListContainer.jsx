import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import ItemList from "../ItemList/ItemList";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [ loading, setLoading ] = useState(true)
  const {idCategoria} = useParams()

  useEffect(()=>{
    const db = getFirestore()
    const queryCollections = collection(db, 'Productos')
    const queryFilter = idCategoria ? query(queryCollections, where('subCategoria','==', idCategoria) ) : queryCollections 
    getDocs(queryFilter)
    .then(resp =>setProductos(resp.docs.map(product=>({id: product.id,...product.data()}))))
    .catch(err => console.log(err))
    .finally(()=>setLoading(false))
  },[idCategoria])

  return (
      loading 
      ? 
      <Loading />
      :
      <>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 50,
        }}>
          <ItemList productos = {productos} />
        </div>
      </>
  )
}
export default ItemListContainer