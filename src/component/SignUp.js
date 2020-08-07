import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css';

const SignUp=()=>{
const history=useHistory();
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
console.log(name,password,email);

const postData=()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
    {  
        M.toast({html: 'invalid Email!',classes:"#d32f2f red darken-2"})
       return

    }
    
    fetch('http://localhost:8000/api/signup',{
      method:"post",
      headers:{
     "Content-Type":"application/json"
            },
         body:JSON.stringify({
          name,
           email,
           password
        })

      
    }).then((res)=>{
        console.log(name,email,password)
     return res.json()   
    }).then((data)=>{
        if(data.error){
            M.toast({html: 'User Already Exit!',classes:"#d32f2f red darken-2"})
        }
        else
        M.toast({html: 'Succesfully sent activation link!',classes:"#00c853 green accent-4"})
        history.push('/login')
        console.log(data);
    }).catch(error=>{
        console.log(error);
    })
    
}
//M.toast({html: 'I am a toast!'})
    return (

        <div className="mycard">
            <div className="card auth-card">
                <h2>Authentication</h2>
                <input type="text" placeholder="name"
                value={name}
                 onChange={(e)=>{setName(e.target.value)}}
                
                />
                <input type="text" placeholder="email"
                 value={email}
                 onChange={(e)=>{setEmail(e.target.value)}}
                />
                <input type="password" placeholder="password"
                 value={password}
                 onChange={(e)=>{setPassword(e.target.value)}}
                />
                <button className="btn waves-effect waves-light #64b5f6 blue lighten-2" onClick={postData} >SignUp
    
                 </button>
                 <h5><Link to='/login'>Already Have Acoount</Link> </h5>
                 
            </div>
        </div>
    )
}

export default SignUp;