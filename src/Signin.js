import React,{useState} from 'react'
import FormInput from './FormInput'
import CustomButton from './CustomButton'
import './signin.scss';

function Signin() {
    const [state,setstate] = useState({email:'',password:''})
    const onHandleChange=(e)=>{
        const {name,value}=e.target;
        console.log(name,value)
setstate({...state,[name]:value})
}

const onHandleSubmit=(e)=>{
e.preventDefault();
}
    return (
        <div className="sign-in">
            <h4>Signin with your emailid and password</h4>
            <form onSubmit={onHandleSubmit}>
            <FormInput type="email" name='email' label='Email' value={state.email}  onHandleChange={onHandleChange}/>
            <FormInput type="password" name='password' label='Password' value={state.password} onHandleChange={onHandleChange}/>
           <div className="button-container">
           <CustomButton className="signinbtn" type="submit" value="SignIn"/>
           <CustomButton className="signingooglebtn" type="submit" value="SignInWithGoogle"/>

           </div>
            </form>
    </div>
    )
}

export default Signin
