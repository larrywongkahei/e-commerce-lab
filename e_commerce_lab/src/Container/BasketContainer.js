import React from 'react';

const BasketContainer = ({basket}) => {
const arrayOfPrice = []

const basketItems = basket.map((item) => {
    arrayOfPrice.push(parseInt(item.price))
    return <li>{item.name}{item.price}</li>
})
const initialValue = 0;
const sumWithInitial = arrayOfPrice.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);


    return(
        <ul>
            {basketItems}
            {sumWithInitial}
        </ul>
    )
}

export default BasketContainer;