import React from 'react';
import NavBar from '../Components/NavBar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ItemList from '../Components/ItemList';

const Maincontainer = () =>{
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/Items" element={<ItemList />}/>
                {/* <Route path="/Basket" element={<ItemsList />}/> */}
            </Routes>
        </Router>
    )
}

export default Maincontainer;