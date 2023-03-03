import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {
    const { cartList, vaciarCarrito, precioTotal, eliminarProducto } = useCartContext() 
    const [formData, setFormData] = useState( {
        name: '',
        phone: '',
        email:'',
        confirmarEmail: ''
    } )
    const insertarOrder = (evt) => {
        evt.preventDefault()
        const order = {}
        order.buyer = formData
        order.isActive = true
        order.items = cartList.map( ({id, marca, modelo, price}) => ({id, marca, modelo, price}))
        order.total = precioTotal()
        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(() => {
            vaciarCarrito()
            setFormData({
                name: '',
                phone: '',
                email:'',
                repetirEmail: ''
            })
        })
    }
    const handleOnChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }
    return (
        <>
            <div className='card p-3 m-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                <h2 className="card-header bg-primary text-white">Carrito de compras</h2>
                { cartList.map(newProducto => (
                    <div key={newProducto.id}>
                        <img src={newProducto.foto} style={{width: 25}} />
                        <p>Nombre: {newProducto.marca} {newProducto.modelo} - Cantidad: {newProducto.cantidad} - Precio: {newProducto.price}</p>
                        <button className="btn btn-danger" onClick={()=> eliminarProducto(producto.id)}> X </button>
                    </div>
                ))}
                <p>{precioTotal() !== 0 && `El precio Total es: ${precioTotal()}`}</p>
                <h4 className="card-header bg-primary text-white">Ingrese sus datos personales</h4>
                <form onSubmit={insertarOrder} >
                    <input className='mt-2'
                        type="text" 
                        name="name"          
                        placeholder = "Ingrese su nombre..."   
                        onChange={handleOnChange} 
                        value={formData.name}
                    />
                    <br />
                    <input className='mt-2'
                        type="text" 
                        name="phone"         
                        placeholder = "Ingrese su numero de teléfono..." 
                        onChange={handleOnChange} 
                        value={formData.phone}
                        />
                    <br />
                    <input className='mt-2'
                        type="text" 
                        name="email"         
                        placeholder = "Ingrese el e-mail..."    
                        onChange={handleOnChange} 
                        value={formData.email}
                        />
                    <br />
                    <input className='mt-2'
                        type="text" 
                        name="repetirEmail"  
                        placeholder = "Confirme el e-mail..."    
                        onChange={handleOnChange} 
                        value={formData.repetirEmail}
                        />
                    <br />
                    <button className="btn btn-primary m-2" type="submit">Generar la orden</button>
                </form>
                <div className="card-footer">
                    <button className="btn btn-danger mt-3" onClick={vaciarCarrito}>Vaciar Carrito</button>
                </div>
            </div>
        </>
    )
}
export default CartContainer