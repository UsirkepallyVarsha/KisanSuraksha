import { LOGO_URL } from "../urls/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
const HeaderData = () => {
  const [login,setLogin]=useState('Login');
    return (
      <div className="HeaderData">
        <div className="logo-data">
          <img
            className="logo"
            src={LOGO_URL}
            alt="Logo"
          />
        </div>
        <div className="nav-data">
          <ul>
         <li><Link to="/">Home</Link></li>
            <li><Link to="/Error">Service</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li> 
           
           
            <li>Cart</li>
          </ul>
          <div className="login-data">
            <button className="Login" onClick={()=>{
              setLogin((login==='Login')?'Logout':<Link to="/Login">{'Login'}</Link>);
                console.log(login);

            }}>{login}</button>
          </div>
          <h4>🌱 SAVE Farmers AND SAVE Earth</h4>
        </div>
      </div>
    );
  };
  export default HeaderData;