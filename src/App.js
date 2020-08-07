import React,{useEffect,createContext,useReducer,useContext, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Navbar2 from './component/Navbar2';
import { BrowserRouter, Route,Switch,useHistory } from 'react-router-dom';

 import Login from './component/Login';
 import Home from './component/Home';
 import Profile from './component/Profile';
 import SignUp from './component/SignUp'
 import Activate from './component/Activate';
 import CreatePost from './component/CreatePost';
 import Forget from './component/Forget';
 import ForgetPassword from './component/ForgetPassword';
 import ResetPassword from './component/ResetPassword';


 



function App() {
 
 const [n,setN]=useState(false)
 
  const Routing=()=>{
    const history=useHistory();
     useEffect(()=>{
      const user=JSON.parse(localStorage.getItem('user'));
      if(user){
        setN(true)
        history.push('/')
    
      }
      else{
       // history.push('/login');
      }
    },[])
    return (
      <Switch>
      <Route exact path="/" >
          <Home />
         </Route>
 
         <Route path="/login" >
           <Login />
         </Route>
         <Route  path="/auth/activate/:token" >
           <Activate />
         </Route>
 
        
         <Route path="/signup" >
           <SignUp />
         </Route>
 
         <Route path="/create" >
           <CreatePost />
         </Route>
         <Route exact path="/profile" >
           <Profile />
         </Route>
         <Route exact path ="/forgetpassword" >
           <ForgetPassword />
         </Route>
         <Route exact path="/forget" >
           <Forget />
         </Route>
         <Route exact path="/auth/password/reset/:token" >
         <ResetPassword />
         </Route>
         
         </Switch>
    
    );
    
    
    }
    
  return (
    <>
       <BrowserRouter>
        {n?<Navbar />:<Navbar2 />}
        <Routing/>
        
      </BrowserRouter>
    
    </>
  );
}

export default App;
