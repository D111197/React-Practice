import { useState } from "react";
import { LOGO_URL } from "../utiles/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utiles/Hooks/useOnlineStatus";
const Header = () => {

 const [btnName, setBtnName] = useState("Login");

 const onlineStatus = useOnlineStatus()

  return (
    <div className="header">
      <div>
        <img
          className="logo"
         src={LOGO_URL}
        />
      </div>
      <div  className ="nav-items">
        <ul>
          <li>{onlineStatus ? "🟢" : "🔴"}</li>
          <li >
          <Link to="/" style={{ textDecoration: 'none'}}>Home</Link>
            </li>
          <li >
          <Link to="/About"  style={{ textDecoration: 'none'}}>About</Link>
          </li>
          <li>
          <Link to="/contact"  style={{ textDecoration: 'none'}}>Contact</Link>
            </li>
            <li>
          <Link to="/grocery"  style={{ textDecoration: 'none'}}>Grocery</Link>
            </li>
          <li>cart</li>
         <button className="login-btn" onClick={() => {
          btnName==="Login"? setBtnName("Logout") : 
          setBtnName("Login")
         }

         }>{btnName}</button>
        </ul>
        
      </div>
    </div>
  );
};
export default Header;
