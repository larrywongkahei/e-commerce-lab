import React from 'react'

const ItemElement = ({item}) => {



    return (

        <li className='item-li'>
            <p>{item.name}</p>
            <p>£{item.price}</p>
        </li>
)
}

export default ItemElement;