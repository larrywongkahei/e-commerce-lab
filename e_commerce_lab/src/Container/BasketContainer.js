import React from 'react';
import { useNavigate } from 'react-router-dom';

const BasketContainer = ({basket}) => {
const arrayOfPrice = []
const handleCheckOut = () =>{
    return navigate("/checkout")
}
const navigate = useNavigate() 
const basketItems = basket.map((item) => {
    arrayOfPrice.push((item.price))
    return <ul>
        <li>
        {item.name}
        </li>
        <p>
        Price:£{item.price}
        </p>
        </ul>
})
const initialValue = 0;
const totalPrice = arrayOfPrice.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);


    return(
        <ul>
            <h3>Drink</h3>
            {basketItems}
            {arrayOfPrice.length > 0? `Total:£${totalPrice}`: ""}
            <button onClick={handleCheckOut}>Checkout</button>
        </ul>
    )
}

export default BasketContainer;