import React, { createContext, useState } from "react";
import Login from "./Login";
import Home from "./Home";

export const context = createContext();
export default function Mainpage() {
  const [islogged, setislogged] = useState(false);
  const [user, setUser] = useState("");
  return (
    <context.Provider
      value={{
        setislogged,
        islogged,
        user,
        setUser,
      }}
    >
      <div>{islogged ? <Home /> : <Login />}</div>
    </context.Provider>
  );
}
