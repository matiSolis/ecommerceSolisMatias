import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../itemCount/ItemCount";

const ItemDetail = ({product}) => {
    const [isCount, setIsCount] = useState(true)
    const {addCart} = useCartContext()
    const onAdd = (cant) =>{ 
        addCart({...product, quantity:cant})
        setIsCount(false)
    }
    return (
        <div className="mt-5 card shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="card-header bg-primary text-white">
                <h5>{product.tradeMark} {product.model}</h5>
            </div>
            <div className="card-body col">
                <img src={product.img} className='w-25'/>
                <h5 className='bg-primary text-white'>Detalle del producto:</h5>
                <p>{product.description}</p>
            </div>
            <div className="card-footer bg-primary text-white">
                <h5 className="mt-3">Precio por unidad: u$s{product.price}</h5>
                <p className="mt-3">Stock disponible: {product.stock}</p>
            </div>
            <div>
                {
                    isCount
                    ?
                    <>
                    <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
                    </>
                    :
                    <>
                        <Link className="m-1 btn btn-primary" to='/cart'>Ir a carrito</Link>
                        <Link className="m-1 btn btn-primary" to='/'>Volver a Home</Link>
                    </>
                    }
            </div>
        </div>
    )
}

export default ItemDetail