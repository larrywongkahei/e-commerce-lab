import React from 'react';
import NavBar from '../Components/NavBar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ItemContainer from './ItemsContainer';
import items from '../data/items';

const Maincontainer = () =>{
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/Items" element={<ItemContainer items={items} />}/>
                {/* <Route path="/Basket" element={<ItemsList />}/> */}
            </Routes>
        </Router>
    )
}

export default Maincontainer;