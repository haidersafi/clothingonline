import logo from './logo.svg';
import {Route} from 'react-router-dom';
import './App.css';
import React, { useEffect,useMemo,useState } from 'react';
import HomePage from './HomePage';
import ShopPage from './ShopPage';
import Collection from './collection';
import Header from './Header'
import SigninSignupPage from './SigninSignupPage';
import { auth } from './firebase';
import {createEmailPassword} from './firebase'


function App() {
  const [userCurrent,setCurrentUser] = useState(null);

  let unsubscribeFromAuth=null;
  
  useEffect(()=>{
unsubscribeFromAuth=(auth.onAuthStateChanged( user =>{
   if (!user){
     return;
   }
    createEmailPassword(user).then(userRef=>
    userRef.onSnapshot(snapShot=>{
    setCurrentUser({id:snapShot.id,...snapShot.data()})
   }))
  
}))
return  () => {
  unsubscribeFromAuth();
 }


  },[userCurrent])
 

  
  return (
    <div className="App">
    <Header currentUser={auth.currentUser} />
    
<Route exact  path="/" component={HomePage}/>
<Route exact  path="/signinsignup" component={SigninSignupPage}/>
<Route exact path="/shop" component={ShopPage}/>
<Route exact path="/shop/:routename" component={Collection}/>


    </div>
  );
}

export default App;
