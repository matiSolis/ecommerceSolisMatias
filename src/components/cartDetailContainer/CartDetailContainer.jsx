import { useCartContext } from "../../context/CartContext"

const CartDetailContainer = () => {
    const { cartList, totalPrice, deleteProduct } = useCartContext() 
    return (
        <div className='card p-3 m-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded '>
            <h2 className="card-header bg-primary text-white">Carrito de compras</h2>
            <div style={{
            display: 'flex',
            flexDirection: 'row',
            displayFlex: 'justify-content-between',
            margin: 10,
            }}>
            
            { cartList.map(newProduct => (
                <div className="m-5 card shadow p-3 mb-5 bg-body-tertiary rounded" key={newProduct.id}>
                    <div>
                        <img src={newProduct.img} style={{width: 100}} />
                    </div>
                    <div>
                        <p>{newProduct.tradeMark} {newProduct.model}</p>
                        <p>Cantidad: {newProduct.quantity} - Precio: u$s {newProduct.quantity * newProduct.price}</p>
                        <button className="btn btn-danger" onClick={()=> deleteProduct(newProduct.id)}> Eliminar producto </button>
                    </div>
                </div>
            ))}
        </div>
        <div>
            <h4>{totalPrice() !== 0 && `El precio Total es de: u$s ${totalPrice()}`}</h4>
        </div>
        </div>
    )
}

export default CartDetailContainer