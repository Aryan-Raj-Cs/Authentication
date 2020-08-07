import React,{useEffect,useState,useContext} from 'react'

 const Profile=()=>{
    const [data,setData]=useState([]);
    const [name,setName]=useState([]);

    useEffect(()=>{
    fetch('http://localhost:8000/api/mypost',{
        headers:{
            "authorize":"Bearer "+localStorage.getItem("jwt_key")
        }
    }).then((res)=>res.json()).then((data)=>{
        //console.log(data.user[0])
        setData(data.user)
        setName(data.user[0].postedBy.name)
       // console.log(data)
    }).catch(error=>{
        console.log(error)
    })
    
    
    },[])
    return (

       <div style={{maxWidth:"550px",margin:"0px auto"}}> 
           <div style={{
               display:'flex',
               justifyContent:"space-around",
               margin:"18px 0px",
               borderBottom:"solid 1px grey"
               }}>
               <div>
                
               </div>
               
               <div>
            <h4>{name}</h4>
               <div style={{
               display:'flex',
               justifyContent:"space-around",
               width:"108%",
              
              
               }} >
                <h6>{data.length} post</h6>
                
               </div>
               </div>
           </div>
       <div className="gallery">
          {
              data.map((val)=>{
                  console.log()
                return (
                    <img className="iteam"
                  src={val.photo}
                  />
                )
              })
          }
          
       </div>
      
       </div>
    )
}

export default Profile;