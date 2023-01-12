import React, { require }from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {

    const logo = require("../coffee_logo.png")

        return (
            <header>
            <div className='logo-div'>
            <h1>L&L COFFEE</h1>
            <img className="logo-img" src={logo}/>
            </div>
            <nav className='nav'>
                <ul className='nav-ul'>
                    <li>
                        <Link to="/" id='Home'>Home</Link>
                    </li>
                    <li>
                        <Link to="/Items" id="itemsPage">Items</Link>
                    </li>
                    <li>
                        <Link to="/Basket" id="basket">Basket</Link>
                    </li>
                </ul>
            </nav>
        </header>
        )


}

export default NavBar;