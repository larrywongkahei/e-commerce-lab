import React from 'react'
import ItemElement from './ItemElement'

const ItemList = ({items, addToBasket}) => {

    const itemNodes = items.map((item, index) => {
        return (
            <>
                <ItemElement  key={index} item={item}/>
                <button  onClick={() => addToBasket(item)}>Add to Basket</button>
            </>

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