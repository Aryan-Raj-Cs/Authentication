import React ,{useContext} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {userContext} from '../App';

function Navbar2() {

  const history=useHistory()
 
  return (
     <nav>
    <div className="nav-wrapper white">
       <Link to="/" className="brand-logo left">Authentication </Link>
       <ul id="nav-mobile" className="right">
       < li> <Link to="/create">create </Link></li>,
        <li> <Link to="/profile">profile </Link></li>
        <button  onClick={()=>{localStorage.clear()
         history.push('/login')
        window.location.reload()
       
        }} >
          
          Logout
    
        </button>

      </ul>
    </div>
  </nav>
        );
}
export default Navbar2;








