import React, {}from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {

        return (
            <div>
                <ul>
                    <li>
                        <Link to="/Items">Items</Link>
                    </li>
                    <li>
                        <Link to="/Basket">Basket</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </div>
        )


}

export default NavBar;