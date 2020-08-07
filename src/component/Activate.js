import React ,{useState,useContext}from 'react';
import {Link,useHistory} from 'react-router-dom'
//import {userContext} from '../App';
import M from 'materialize-css';
import {useParams} from 'react-router-dom'


const Activate = () => {
    const history = useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
  
    //console.log(password,email);
    
    
    
    const {token} = useParams()
    console.log(token);

    const postData=()=>{
       
        fetch('http://localhost:8000/api//account-activation',{
          method:"post",
          headers:{
         "Content-Type":"application/json"
                },
             body:JSON.stringify({
             token
            })
    
          
        }).then((res)=>{
           
         return res.json()   
        }).then((data)=>{
            if(data.error){
                M.toast({html: 'Not Activated',classes:"#d32f2f red darken-2"})
            }
            else
            M.toast({html: 'Your Account has Been activated!',classes:"#00c853 green accent-4"})
            history.push('/login')
            console.log(data);
        }).catch(error=>{
            console.log(error);
        })
        
    }
    return (

        <div className="mycard">
            <div className="card auth-card">
                <h2>Authentic</h2>
                
                <button className="btn waves-effect waves-light #64b5f6 blue lighten-2" onClick={postData} >Activate Your Account
    
                 </button>
                 <h5><Link to='/signup'>Don't Have Account</Link> </h5>
            </div>
        </div>
    )
}

export default Activate;