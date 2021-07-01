import logo from './logo.svg';
import {Route} from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import ShopPage from './ShopPage';
import Collection from './collection';
import Header from './Header'
import SigninSignupPage from './SigninSignupPage';

function App() {
  return (
    <div className="App">
    <Header/>
    
<Route exact  path="/" component={HomePage}/>
<Route exact  path="/signinsignup" component={SigninSignupPage}/>
<Route exact path="/shop" component={ShopPage}/>
<Route exact path="/shop/:routename" component={Collection}/>


    </div>
  );
}

export default App;
