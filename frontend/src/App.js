import './style.css';
import {HashRouter, Routes, Route} from "react-router-dom";
import { NavBar } from './Components/Navbar';
import { Home } from './Components/Home';
import { Login } from "./Components/Login";
import { SignUp } from './Components/SignUp';
import { SignIn } from './SignIn';
import { CartDetails } from './Components/CartDetails';
// import { Cart } from './Components/Cart';
import { Product } from './Components/Product';
import { Buy } from './Components/Buy';
import { Provider } from 'react-redux';
import { StoreSet } from './Components/Redux/store';


function App() {
  return (
    <div>
    <Provider store={StoreSet}>
    <HashRouter>
    <Routes>
      <Route path="/" element={<NavBar/>}>
      <Route index element={<Home/>}/>
      <Route path="Login" element={<Login/>}/>
      <Route path="SignUp" element={<SignUp/>}/>
      {/* <Route path="/Login/Sign-In" element={<SignIn/>}/> */}
      <Route path="productone/:id" element={<Product/>}/>
      <Route path="Buy/:id" element={<Buy/>}/>
     
      </Route>
    </Routes>
   </HashRouter>
   </Provider>
    </div>
  );
}

export default App;
