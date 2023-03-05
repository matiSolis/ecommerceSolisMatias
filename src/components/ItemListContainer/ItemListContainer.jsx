import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Loading } from "../loading/Loading";
import ItemList from "../itemList/ItemList";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [ loading, setLoading ] = useState(true)
  const {idCategory} = useParams()

  useEffect(()=>{
    const db = getFirestore()
    const queryCollections = collection(db, 'Products')
    const queryFilter = idCategory ? query(queryCollections, where('subCategory','==', idCategory) ) : queryCollections 
    getDocs(queryFilter)
    .then(resp =>setProducts(resp.docs.map(product=>({id: product.id,...product.data()}))))
    .catch(err => console.log(err))
    .finally(()=>setLoading(false))
  },[idCategory])
console.log(products)

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
          <ItemList products = {products} />
        </div>
      </>
  )
}
export default ItemListContainer