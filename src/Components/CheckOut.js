import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Checkout = ({total}) =>{
    const [status, setStatus] = useState(false)    
    const navigate = useNavigate()
    const handlePay = () =>{
    alert("Failed to pay")
    setStatus(true)
    }

    useEffect(() => {
        if(status){
            navigate("/")
            window.location.reload()
        }
    }, [status])


    return (
        <>
        <div className='checkout-form'>
            <label>Card number:</label>
            <input type="text" placeholder="Enter your card number"></input>
            <label>Card holder name:</label>
            <input type="text" placeholder="Enter your name"></input>
            <label>Date of expiry:</label>
            <input type="tel" maxLength="2" /><input type="tel" maxLength="2"></input>
        </div>
            <h1 className="h1-total">Total:{total}</h1>
            <div className="checkout-total-div">
            <input type="checkbox"></input>
            <button className="button-checkout" onClick={handlePay}>Checkout</button>
        </div>
        </>
    )
}

export default Checkout