import { Link } from "react-router-dom"


const Item = ({producto}) => {
    return (
        <div className='card w-25 p-3 m-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
            <Link to={`/detalle/${producto.id}`}>
                <div className='card-header bg-primary text-light'>
                    {producto.marca}
                    <br/>
                    {producto.modelo}
                </div>
                <div className='card-body'>
                    <img className='w-100'src={producto.foto}/>
                </div>
            </Link>
        </div>
    )
}


export default Item