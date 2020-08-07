import React ,{useState,useContext}from 'react';
import {Link,useHistory} from 'react-router-dom'
//import {userContext} from '../App';
import M from 'materialize-css';
import {useParams} from 'react-router-dom'


const Forget = () => {
    const history = useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
  
    //console.log(password,email);
    
    
    
    const {token} = useParams()
    console.log(token);

  
    return (

        <div className="mycard">
            <div className="card auth-card">
                <h2>Authentic</h2>
                
                <button className="btn waves-effect waves-light #64b5f6 blue lighten-2" >Link Has Been sent to Email
    
                 </button>
                
            </div>
        </div>
    )
}

export default  Forget;