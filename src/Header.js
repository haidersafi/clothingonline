import React from 'react';
import {ReactComponent as Logo} from './logo.svg';
import { Link } from 'react-router-dom';
import './header.scss'

function Header() {
    return (
        <div className="header">
            <Logo class="logo"/>
            <div className="options">
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/'>Contact</Link>
            </div>
        </div>
    )
}

export default Header
