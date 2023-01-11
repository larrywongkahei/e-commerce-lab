import React, { useState } from 'react'

const ItemElement = ({item}) => {



    return (
        <form>
            <li>
                <p>{item.name}{item.price}</p>
                
            </li>
        </form>
)
}

export default ItemElement;