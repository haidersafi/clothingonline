import React, { useState } from "react";
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";
import './signup.scss';
import {auth,createEmailPassword} from './firebase'

function Signup() {
     const  [state, setstate] = useState({displayName:'',email:'',password:'',confirmPassword:''})
     const onHandleChange=(e)=>{
         const {name,value}=e.target;
         setstate({...state,[name]:value})

     }
     const onHandleSubmit=async (e)=>{
         e.preventDefault();
const {displayName,email,password,confirmPassword}=state;
if(password!==confirmPassword){return;}
try{
const { user }=await auth.createUserWithEmailAndPassword(email,password);
await createEmailPassword(user,{displayName})}
catch(err){alert(err.message)}



         setstate({displayName:'',email:'',password:'',confirmPassword:''});
     }
  return (
    <div className="signup">
      <h4>SignUp</h4>
      <form onSubmit={onHandleSubmit}>
        <FormInput type="text" name="displayName" value={state.displayName} label="DisplayName" onChange={onHandleChange} required  />
        <FormInput type="email" name="email" value={state.email} label="Email" onChange={onHandleChange} required  />
        <FormInput type="password" name="password" value={state.password} label="Password" onChange={onHandleChange} required />
        <FormInput type="password" name="confirmPassword" value={state.confirmPassword} label="ConfirmPassword" onChange={onHandleChange} required />
        <CustomButton className="signupbtn" type="submit"  value="Signup"/>
      </form>
    </div>
  );
}

export default Signup;
