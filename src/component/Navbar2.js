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
       < li> <Link to="/login">login </Link></li>,
        <li> <Link to="signup">signup </Link></li>
       

      </ul>
    </div>
  </nav>
        );
}
export default Navbar2;








