import React ,{useState,useContext}from 'react';
import {Link,useHistory} from 'react-router-dom'
//import {userContext} from '../App';
import M from 'materialize-css';
import {useParams} from 'react-router-dom'


const ResetPassword = () => {
    const history = useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
  
    //console.log(password,email);
    
    
    
    const {token} = useParams()
    console.log(token);

    const postData=()=>{
       
        fetch('http://localhost:8000/api//reset-password',{
          method:"post",
          headers:{
         "Content-Type":"application/json"
                },
             body:JSON.stringify({
             
             resetPasswordLink:token, 
             newPassword:password
            })
    
          
        }).then((res)=>{
           
         return res.json()   
        }).then((data)=>{
            if(data.error){
                M.toast({html: 'Not ResetPasswordd',classes:"#d32f2f red darken-2"})
            }
            else
            M.toast({html: 'password has been Reseted!',classes:"#00c853 green accent-4"})
            history.push('/login')
            console.log(data);
        }).catch(error=>{
            console.log(error);
        })
        
    }
    return (

        <div className="mycard">
            <div className="card auth-card">
                <h2>Authentication</h2>
                <input type="password" placeholder="password"
                 value={password}
                 onChange={(e)=>{setPassword(e.target.value)}}
                />
                <button className="btn waves-effect waves-light #64b5f6 blue lighten-2" onClick={postData} >ResetPassword Your Account
    
                 </button>
                
            </div>
        </div>
    )
}

export default ResetPassword;