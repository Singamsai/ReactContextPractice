import React, { createContext, useState } from "react";
import "./App.css";
// import Mainpage from "./comps/contextApi3/Mainpage";
import Nav from "./pages/Nav"
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AddtoCart from "./pages/AddtoCart";
import Unsplash from "./pages/Unsplash";
import Technologies from "./pages/Technologies";
import Html from "./pages/techpages/Html";
import CSS from "./pages/techpages/CSS";
import JavaScript from "./pages/techpages/Javascript";
import Reactt from "./pages/techpages/Reactt";
import Login from "./pages/Login";


export const Globaldata = createContext()
function App() {
  const [islogged, setislogged] = useState(false);
  const [user, setUser] = useState("");
  const [addtocart, setaddtocart] = useState([])
  return (
    <Globaldata.Provider value={{islogged, setislogged, user, setUser,addtocart,setaddtocart}}>
      
      {islogged && <Nav/>}
      <Routes>
        <Route path="/" element={islogged ? <Home/>:<Login/>}></Route>
        <Route path="/tech" element={islogged ? <Technologies/>:<Login/>}>
          <Route path="" element={<Navigate to="html"/>}/>
          <Route path="html" element={<Html/>}></Route>
          <Route path="css" element={<CSS/>}></Route>
          <Route path="js" element={<JavaScript/>}></Route>
          <Route path="react" element={<Reactt/>}></Route>
        </Route>
        <Route path="//unsplash" element={islogged ?<Unsplash/>:<Login/>}></Route>
        <Route path="/products" element={islogged ?<Products/>:<Login/>}></Route>
        <Route path="/addtocart" element={islogged?<AddtoCart/>:<Login/>}></Route>
      </Routes>
    </Globaldata.Provider >
  )

}

export default App;
