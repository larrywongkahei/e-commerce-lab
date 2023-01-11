import React from 'react'
import ItemElement from './ItemElement'

const ItemList = () => {

const itemNodes = <ItemElement />

    return (
        <div>
            <ul>
                <h2>I am item list</h2>
                {/* {itemNodes} */}
            </ul>
        </div>
    )
}

export default ItemList;