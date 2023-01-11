import React from "react";
import { useNavigate } from "react-router";
const Checkout = () =>{

    const navigate = useNavigate()

    const handlePay = () =>{
    alert("Failed to pay")
    return navigate("/Home")
    }



    return (
        <>
        <div className='checkout-form'>
            <label>Card number:</label>
            <input type="text" placeholder="Enter your card number"></input>
            <label>Card holder name:</label>
            <input type="text" placeholder="Enter your name"></input>
            <label>Date of expiry:</label>
            <input type="text" maxLength="2"/><input type="text" maxLength="2"></input>
        </div>
            <h1 className="h1-total">Total:</h1>
            <div className="checkout-total-div">
            <input type="checkbox"></input>
            <button className="button-checkout" onClick={handlePay}>Checkout</button>
        </div>
        </>
    )
}

export default Checkout