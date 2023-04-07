import React, { useContext, useState } from "react";
import "./login.css";
import { context } from "./Mainpage";

export default function Login() {
  const {setislogged, setUser } = useContext(context);
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  return (
    <div className="login">
      <div className="insidelogin">
        <h1>
          ContextAPI <br />
          Login Page
        </h1>
        <br />
        <br />
        <div>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          ></input>
          <br />
          <br />
          <input
            type="password"
            value={pass}
            onChange={(e) => {
              setpass(e.target.value);
            }}
          ></input>
          <br />
          <br />
          <br />
          <br />
        </div>
        <button
          onClick={() => {
            if (
              (email === "singam" && pass === "8688") ||
              (email === "admin" && pass === "12345")
            ) {
              setislogged(true);
              setUser(email);
            } else {
              alert("please enter valid credentials");
            }
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
