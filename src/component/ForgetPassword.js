import React ,{useState,useContext}from 'react';
import {Link,useHistory} from 'react-router-dom'
//import {userContext} from '../App';
import M from 'materialize-css';


const Login = () => {
    const history = useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
   // const {state,dispatch} = useContext(userContext)
    
    console.log(password,email);
    
    const postData=()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
        {  
            M.toast({html: 'invalid Email!',classes:"#d32f2f red darken-2"})
           return
    
        }
        
        fetch('http://localhost:8000/api/forgot-password',{
          method:"post",
          headers:{
         "Content-Type":"application/json"
                },
             body:JSON.stringify({
               email

            })
    
          
        }).then((res)=>{
           
         return res.json()   
        }).then((data)=>{
            if(data.error){
                console.log(data);
                M.toast({html: 'User Already Exit!',classes:"#d32f2f red darken-2"})
            }
            else
           
            console.log(data.message)
            M.toast({html: data.message,classes:"#00c853 green accent-4"})
            console.log(data);
            history.push('/forget')
           // window.location.reload()
           
        }).catch(error=>{
            console.log(error);
        })
        
    }
    return (

        <div className="mycard">
            <div className="card auth-card">
                <h2>Authentication</h2>
                <input type="text" placeholder="email"
                 value={email}
                 onChange={(e)=>{setEmail(e.target.value)}}
                />
            
                <button className="btn waves-effect waves-light #64b5f6 blue lighten-2" onClick={postData} >SendLink
    
                 </button>
                
            </div>
        </div>
    )
}

export default Login;