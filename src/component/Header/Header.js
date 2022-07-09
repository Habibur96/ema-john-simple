import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

import { Link } from "react-router-dom"


const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" />
                <div>
                    {/* <a href="/">Shop</a>
                    <a href="/Order">Orders</a>
                    <a href="/Inventory">Inventory</a>
                    <a href="/about">About</a> */}

                    <Link to='/'>Shop</Link>
                    <Link to='/Order'>Orders</Link>
                    <Link to='/Inventory'>Inventory</Link>
                    <Link to='/About'>About</Link>


                </div>

            </nav>
        </div>
    );
};

export default Header;