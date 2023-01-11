import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ItemContainer from './ItemsContainer';
import items from '../data/items';
import BasketContainer from './BasketContainer';
import Checkout from '../Components/CheckOut';

const MainContainer = () =>{

    const [basket, setBasket] = useState([])

    useEffect(()=>{
        console.log(basket)
        setBasket([])
    }, [window.location.pathname])

    const addToBasket = (item) =>{
        const newBasketList = [...basket, item];
        setBasket(newBasketList)
    }


    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/Items" element={<ItemContainer addToBasket={addToBasket} items={items} />}/>
                <Route path="/Basket" element={<BasketContainer basket={basket} />}/>
                <Route path='/*' element={ <redirect to="/" /> }/>
                <Route path='/checkout/:price' element={<Checkout />}/>
            </Routes>
        </Router>
    )
}

export default MainContainer;