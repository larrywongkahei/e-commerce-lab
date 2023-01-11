import React from 'react'
import ItemElement from './ItemElement'

const ItemList = ({items}) => {

    const itemNodes = items.map((item) => {
        return (
        <li>
            <h2>{item.name}{item.price}</h2>
        </li>
        )
    })

    return (
        <div>
            <ul>
                {itemNodes}
            </ul>
        </div>
    )
}

export default ItemList;