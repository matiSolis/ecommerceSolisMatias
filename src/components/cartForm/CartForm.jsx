import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"

const CartForm = () => {
    const { cartList, clearCart, totalPrice} = useCartContext() 
    const [isId, setIsId] = useState()
    const [formData, setFormData] = useState( {
        name: '',
        phone: '',
        email:'',
        reEmail: ''
    } )
    const insertarOrder = (evt) => {
        evt.preventDefault()
        const order = {}
            if(formData.email !== formData.reEmail){    
                alert('Complete los campos de manera indicada.');
            }else{
                order.buyer = formData
                order.isActive = true
                order.items = cartList.map( ({id, tradeMark, model, price}) => ({id, tradeMark, model, price}))
                order.total = totalPrice()
                const db = getFirestore()
                const ordersCollection = collection(db, 'orders')
                addDoc(ordersCollection, order)
                .then(resp => setIsId(resp.id))
                .catch(err => console.log(err))
                .finally(() => {
                    clearCart()
                    setFormData({
                        name: '',
                        phone: '',
                        email:'',
                        reEmail: ''
                    })
                })
            }
    }

    const handleOnChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            })
    }
    return (
        <div className="card">
            <div className="card-header bg-primary text-white">
                <h5>Ingrese sus datos personales</h5>
            </div>
            <form onSubmit={insertarOrder} >
                <input className='mt-2 p-1 border border-primary rounded-pill bg-light text-primary'
                    type="text" 
                    name="name"          
                    placeholder = "Nombre..."   
                    onChange={handleOnChange} 
                    value={formData.name}
                />
                <br />
                <input className='mt-2 p-1 border border-primary rounded-pill bg-light text-primary'
                    type="tel" 
                    name="phone"         
                    placeholder = "Numero de teléfono..." 
                    onChange={handleOnChange} 
                    value={formData.phone}
                    />
                <br />
                <input className='mt-2 p-1 border border-primary rounded-pill bg-light text-primary'
                    type="email" 
                    name="email"         
                    placeholder = "Ingrese el e-mail..."    
                    onChange={handleOnChange} 
                    value={formData.email}
                    />
                <br />
                <input className='mt-2 p-1 border border-primary rounded-pill bg-light text-primary'
                    type="email" 
                    name="reEmail"  
                    placeholder = "Confirme el e-mail..."    
                    onChange={handleOnChange} 
                    value={formData.reEmail}
                    />
                <br />
                <button className="btn btn-primary m-2" type="submit">Comprar</button>
            </form>
            <div className="card-footer">
                <button className="btn btn-danger mt-3" onClick={clearCart}>Vaciar Carrito</button>
            </div>
            <div className="card">    
                {isId !== '' && <h5>Su orden de compra es: {isId}</h5>}
            </div>
        </div>
    )
}

export default CartForm