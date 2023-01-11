import React from 'react';

const BasketContainer = ({basket}) => {

const basketItems = basket.map((item) => {
    return <li>{item.name}{item.price}</li>
})

    return(
        <ul>
            {basketItems}
        </ul>
    )
}

export default BasketContainer;