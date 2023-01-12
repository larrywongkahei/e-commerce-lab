import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ItemContainer from './ItemsContainer';
import items from '../data/items';
import BasketContainer from './BasketContainer';
import Checkout from '../Components/CheckOut';

const MainContainer = () =>{

    const [basket, setBasket] = useState([])
    const [totalprice, setPrice] = useState(0)

    useEffect(()=>{
        console.log(basket)
        setBasket([])
    }, [])

    const addToBasket = (item) =>{
        const newBasketList = [...basket, item];
        setBasket(newBasketList)
    }

    const getTotalPrice = (total) =>{
        setPrice(total)
    }


    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/Items" element={<ItemContainer addToBasket={addToBasket} items={items} />}/>
                <Route path="/Basket" element={<BasketContainer basket={basket} getTotalPrice={getTotalPrice}/>}/>
                <Route path='/*' element={ <redirect to="/" /> }/>
                <Route path='/checkout/pay' element={<Checkout total={totalprice}/>}/>
            </Routes>
        </Router>
    )
}

export default MainContainer;