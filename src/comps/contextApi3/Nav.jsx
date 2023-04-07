import React, { useContext } from "react";
import "./nav.css";
import { context } from "./Mainpage";

export default function Nav() {
  const { setislogged, user } = useContext(context);
  return (
    <div className="nav">
      <div>
        <h1>ContextAPI</h1>
      </div>
      <div className="options">
        <p>home</p>
        <p>products</p>
        <p>about</p>
        <p>contact</p>
        <p
          onClick={() => {
            setislogged(false);
          }}
        >
          Logout {user}
        </p>
      </div>
    </div>
  );
}
