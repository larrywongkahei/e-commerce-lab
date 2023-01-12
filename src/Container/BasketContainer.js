import React from 'react';
import { useNavigate } from 'react-router-dom';

const BasketContainer = ({basket, getTotalPrice}) => {
const arrayOfPrice = []
const handleCheckOut = () =>{
    if(totalPrice === 0){
        alert("No items selected")
    }else{
        getTotalPrice(totalPrice)
        navigate(`/checkout/pay`)
    }
}
const navigate = useNavigate() 
const basketItems = basket.map((item, index) => {
    arrayOfPrice.push((item.price))
    return <li className='item-element-div' key={index}>
        {item.name} £{item.price}
        </li>
})
const initialValue = 0;
const totalPrice = arrayOfPrice.reduce(
  (previousPrice, currentPrice) => previousPrice + currentPrice,
  initialValue
);


    return(

        <div className='item-list-div-basket'>
            {/* <h1><u>BASKET</u></h1> */}
            <ul className='item-list-ul'>
                    <b className='basketItems'>{basketItems}</b>
                    <hr></hr>
                <li className='total-li'>
                    <b>{arrayOfPrice.length > 0? `Total: £${totalPrice}`: ""}</b>
                </li>
            </ul>
        <button onClick={handleCheckOut} className='button-checkout'>Checkout</button>
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