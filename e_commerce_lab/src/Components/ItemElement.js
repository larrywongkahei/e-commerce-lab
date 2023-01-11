import React from 'react'

const ItemElement = ({name, price}) => {



    return (
        <li><p>{name}{price}</p></li>
    )
}

export default ItemElement;