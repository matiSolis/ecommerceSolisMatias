import { Link } from "react-router-dom"


const Item = ({product}) => {
    return (
        <div className='card w-25 p-3 m-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
            <Link to={`/detail/${product.id}`}>
                <div className='card-header bg-primary text-light'>
                    {product.tradeMark}
                    <br/>
                    {product.model}
                </div>
                <div className='card-body'>
                    <img className='w-100'src={product.img}/>
                </div>
            </Link>
        </div>
    )
}


export default Item