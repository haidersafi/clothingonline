import React from 'react';
import {ReactComponent as Logo} from './logo.svg';
import { Link } from 'react-router-dom';
import './header.scss';
import {auth} from './firebase';

const Header=({currentUser})=> {
    console.log('header:',currentUser)

    return (
        <div className="header">
            <Logo className="logo"/>
            <div className="options">
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/'>Contact</Link>
            { currentUser?(<Link to='/signinsignup'  onClick={()=>{auth.signOut()
                console.log('a',auth)}}>SignOut</Link>):(<Link to='/signinsignup'>SignIn</Link>)}
            {console.log('currentUser',currentUser)}
            </div>
        </div>
    )
}

export default Header
