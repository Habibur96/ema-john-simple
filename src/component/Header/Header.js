import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

import { Link } from "react-router-dom"
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
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
                    <Link to='/Orders'>Orders</Link>
                    <Link to='/Inventory'>Inventory</Link>
                    <Link to='/About'>About</Link>
                    <Link to='/login'>Login</Link>
                    {

                        user ?

                            <button className='btn btn-link text-white text-decoration-none fs-3' onClick={handleSignOut} >Sign Out</button> :

                            <Link to='/SignUp'>Sign Up</Link>
                    }

                </div>

            </nav>
        </div>
    );
};

export default Header;