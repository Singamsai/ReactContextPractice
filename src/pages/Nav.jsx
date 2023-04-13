import React, { useContext } from "react";
import "./nav.css";
import {Link, useNavigate} from 'react-router-dom';
import { Globaldata } from "../App";

export default function Nav() {
  const {setislogged, user} = useContext(Globaldata)
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div>
        <h1 onClick={()=>{navigate("/")}}>Routing</h1>
      </div>
      <div className="options">
        <Link to="/"><p>Home</p></Link>
        <Link to="/unsplash"><p>Unsplash</p></Link>
        <Link to="/tech"><p>Technologies</p></Link>
        <Link to="/products"><p>Products</p></Link>
        <Link to="/addtocart"><p>Cart</p></Link>
        <div><button onClick={()=>{setislogged(false)
        navigate("/")}
         }>Logout</button>(<span>{user}</span>)</div>
      </div>
    </div>
  );
}
