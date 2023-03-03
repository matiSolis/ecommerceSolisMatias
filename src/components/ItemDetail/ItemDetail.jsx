import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const Componente = ()=> {
    return (
        <div style={{
            height: '100vh',
            width: '50vw',
            backgroundColor: 'grey',
            display: 'absolute',
            float: 'right'
        }}>contenido carrito<Link to="/cart" >Completar la compra</Link></div>
    )
}
const ItemDetail = ({producto}) => {
    const [isCount, setIsCount] = useState(true)
    const [cart, setCart] = useState(false)
    const {agregarCarrito} = useCartContext()
    const onAdd = (cant) =>{ 
        agregarCarrito({...producto, cantidad:cant})
        setIsCount(false)
    }
    const handleCart =()=>{
        setCart(!cart)
    }
    return (
        <div className="mt-5 card shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="card-header bg-primary text-white">
                <h5>{producto.marca} {producto.modelo}</h5>
            </div>
            <div className="card-body col">
                <img src={producto.foto} className='w-25'/>
                <h5 className='bg-primary text-white'>Detalle del producto:</h5>
                <p>{producto.descripcion}</p>
            </div>
            <div className="card-footer bg-primary text-white">
                <h5 className="mt-3">Precio por unidad: u$s{producto.price}</h5>
                <p className="mt-3">Stock disponible: {producto.stock}</p>
            </div>
            <div>
                {
                    isCount
                    ?
                    <>
                    <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
                    </>
                    :
                        <>
                            <Link className="mt-1 btn btn-primary" onClick={handleCart} to='/cart'>Ir a carrito</Link>
                            <Link className="mt-1 btn btn-primary" to='/'>Volver a Home</Link>
                        </>
                    }
            </div>
        </div>
    )
}

export default ItemDetail