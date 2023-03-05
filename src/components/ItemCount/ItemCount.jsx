import React, { useState } from 'react'

const ItemCount = ({initial=1, stock=10, onAdd}) => {
    const [count, setCount] = useState(initial)
    const handleAdd =()=>{
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const handleSubtract =()=>{
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
                <button className='btn btn-primary mx-auto' onClick={handleSubtract}>-</button>
                <label className='mx-3'>{count}</label>
                <button className='btn btn-primary mx-auto' onClick={handleAdd}>+</button>
            </div>
            <div>
                <button className='btn btn-primary w-25' onClick={handleOnAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount