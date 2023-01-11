import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BasketContainer = ({basket}) => {
const arrayOfPrice = []
const handleCheckOut = (totalPrice) =>{
    return navigate(`/checkout/${totalPrice}`)
}
const navigate = useNavigate() 
const basketItems = basket.map((item) => {
    arrayOfPrice.push((item.price))
    return <li className='item-element-div'>
        {item.name} £{item.price}
        </li>
})
const initialValue = 0;
const totalPrice = arrayOfPrice.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);


    return(

        <div className='item-list-div-basket'>
            {/* <h1><u>BASKET</u></h1> */}
            <ul className='item-list-ul'>
                    {basketItems}
                    <hr></hr>
                <li className='total-li'>
                    <b>{arrayOfPrice.length > 0? `Total: £${totalPrice}`: ""}</b>
                </li>
            </ul>
        <button onClick={() => handleCheckOut(`${totalPrice}`)} className='button-checkout'>Checkout</button>
    </div>
        // <div className='item-list-div-basket'>
        //     <ul className='item-list-ul'>
        //         <h3>Drink</h3>
        //         {basketItems}
        //         <li className='total-li'>
        //             {arrayOfPrice.length > 0? `Total:£${totalPrice}`: ""}
        //         </li>
        //         <button onClick={handleCheckOut}>Checkout</button>
        //     </ul>
        // </div>
    )
}

export default BasketContainer;