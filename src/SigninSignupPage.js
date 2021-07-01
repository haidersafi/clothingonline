import React from 'react';
import Signin from './Signin';
import Signup from './Signup';
import './signinsignup.scss'

function SigninSignupPage() {
    return (
        <div className="container">
        <Signin/>
        <Signup/>
        </div>
    )
}

export default SigninSignupPage
