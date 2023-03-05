import { createContext, useState, useContext } from "react";

const CartContext = createContext([])
export const useCartContext = () =>  useContext(CartContext)
export const CartContextProvider = ({children})=>{
    const [ cartList, setCartList ] = useState([])
    const addCart = (newProduct) =>{
        const idProductCart = cartList.findIndex(product => product.id === newProduct.id)
        if(idProductCart!==-1){
            cartList[idProductCart].quantity += newProduct.quantity
            setCartList([...cartList])
            return
        }
        setCartList([...cartList, newProduct])
    }
    const totalPrice = () => cartList.reduce( (count, product) => count += (product.quantity*product.price), 0)
    const totalQuantity = () => cartList.reduce( (count, product) => count += product.quantity, 0)
    const deleteProduct = (id) => setCartList(cartList.filter(prod => prod.id !== id))
    const clearCart = () => setCartList( [] )
    return (
        <CartContext.Provider value={{
            cartList,
            addCart,
            clearCart,
            totalPrice,
            totalQuantity,
            deleteProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}