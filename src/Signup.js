import React, { useState } from "react";
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";
import './signup.scss'

function Signup() {
     const  [state, setstate] = useState({name:'',email:'',password:'',confirmPassword:''})
     const onHandleChange=(e)=>{
         const {name,value}=e.target;
         setstate({...state,[name]:value})

     }
     const onHandleSubmit=(e)=>{
         e.preventDefault();
         setstate({name:'',email:'',password:'',confirmPassword:''});
     }
  return (
    <div className="signup">
      <h4>SignUp</h4>
      <form onSubmit={onHandleSubmit}>
        <FormInput type="text" name="name" value={state.name} label="DisplayName" onHandleChange={onHandleChange}  />
        <FormInput type="email" name="email" value={state.email} label="Email" onHandleChange={onHandleChange} />
        <FormInput type="password" name="password" value={state.password} label="Password" onHandleChange={onHandleChange} />
        <FormInput type="password" name="confirmPassword" value={state.confirmPassword} label="ConfirmPassword" onHandleChange={onHandleChange}/>
        <CustomButton className="signupbtn" type="submit"  value="Signup"/>
      </form>
    </div>
  );
}

export default Signup;
