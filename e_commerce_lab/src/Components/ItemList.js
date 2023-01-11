import React from 'react'
import ItemElement from './ItemElement'

const ItemList = ({name, price}) => {


    return (
        <div>
            <ul>
                <h2>{name} {price}</h2>
            </ul>
        </div>
    )
}

export default ItemList;