import React, { useState } from 'react'

const ItemCount = ({initial=1, stock=10, onAdd}) => {
    const [count, setCount] = useState(initial)
    const handleSumar =()=>{
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const handleRestar =()=>{
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const handleOnAdd = ()=>{
        onAdd(count)        
    }
    return (
        <div className='card'>
            <div className='card-body col'>
                <button className='btn btn-primary mx-auto' onClick={handleRestar}>-</button>
                <label className='mx-3'>{count}</label>
                <button className='btn btn-primary mx-auto' onClick={handleSumar}>+</button>
            </div>
            <div>
                <button className='btn btn-primary w-25' onClick={handleOnAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount