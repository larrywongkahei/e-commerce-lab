import React from 'react'
import ItemElement from './ItemElement'

const ItemList = ({items, addToBasket}) => {

    const itemNodes = items.map((item, index) => {
        return (
            <div className='item-element-div' key={index}>
                <ItemElement  key={index} item={item}/>
                <button  data-testid="addbutton" className="button-add" onClick={() => addToBasket(item)}>Add to Basket</button>
            </div>

        )
    })

    return (
        <div className='item-list-div'>
            <h1><u>COFFEE</u></h1>
            <ul className='item-list-ul'>
                {itemNodes}
            </ul>
        </div>
    )
}

export default ItemList;