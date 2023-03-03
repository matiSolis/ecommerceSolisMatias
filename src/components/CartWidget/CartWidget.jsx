import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

const CartWidget = () => {
  const { cantidadTotal } = useCartContext()
  return (
    <div className="mx-3 d-flex flex-row">
      <div> {cantidadTotal() !== 0 && cantidadTotal()}<Link to="/cart" >🛒</Link></div>
    </div>
  )
}

export default CartWidget