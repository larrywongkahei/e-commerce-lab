import React from 'react'
import ItemElement from './ItemElement'

const ItemList = ({items}) => {

    const itemNodes = items.map((item, index) => {
        return (
        <ItemElement  key={index} name={item.name} price={item.price}/>

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