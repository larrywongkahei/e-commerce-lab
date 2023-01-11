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
        <label>Card number:</label>
        <input type="text" placeholder="Enter your card number"></input>
        <label>Card holder name:</label>
        <input type="text" placeholder="Enter your name"></input>
        <label>Date of expiry:</label>
        <input type="text" maxLength="2"/><input type="text" maxLength="2"></input>
        <h1>Total:</h1>
        <input type="checkbox"></input>
        <button onClick={handlePay}>Checkout</button>
        </>
    )
}

export default Checkout