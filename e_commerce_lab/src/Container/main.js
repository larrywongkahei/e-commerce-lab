import React from 'react';
import NavBar from '../Components/NavBar';
import { redirect, BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ItemContainer from './ItemsContainer';
import items from '../data/items';

const Maincontainer = () =>{
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/Items" element={<ItemContainer items={items} />}/>
                {/* <Route path="/Basket" element={<ItemsList />}/> */}
                <Route path='/redirect-page' element={ <redirect to="/" /> }/>
            </Routes>
        </Router>
    )
}

export default Maincontainer;