import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

const CartWidget = () => {
  const { totalQuantity } = useCartContext()
  return (
    <div className="m-2 d-flex flex-row">
      <p className="m-1 p-1 text-white"> {totalQuantity() !== 0 && totalQuantity()}</p>
      <div className="p-1">
        <Link to="/cart" >🛒</Link>
      </div>
    </div>
  )
}

export default CartWidget