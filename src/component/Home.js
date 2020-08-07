import React,{useState,useEffect,useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
const Home  = ()=>{
    const [data,setData] = useState([])
    const history=useHistory()
    useEffect(()=>{
       fetch('http://localhost:8000/api/allpost',{
           headers:{
               "authorize":"Bearer "+localStorage.getItem("jwt_key")
           }
       }).then(res=>res.json())
       .then(result=>{
           console.log(result.result)
           setData(result.result)
       }).catch(error=>{
           history.push('/login')
           window.location.reload()
       })
    },[])

    
    
   
    console.log(data)
   return (
       <div className="home">
            
           {
               data.map(item=>{
                   return(
                       <div className="card home-card" key={item._id}>
                          
                          <div className="card-image">
                                <img src={item.photo}/>
                            </div>
                              
                              <h6>{item.title}</h6> 
                               <h6>{item.body}</h6> 
                            </div>
                      
                   )
               })
           }
          
          
       </div>
   )
}


export default Home