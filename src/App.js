import React, { createContext, useState } from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Contact from './components/Contact';
import Home from './components/Home';
import Service from './components/Service';
import Page from './components/Page';

export const GlobalData = createContext()
function App() {
  const [state, setstate]=useState(false);
  return (
    <GlobalData.Provider value={{state:state, setstate:setstate}}>
    <div className="App" style={{backgroundColor: state?"black":"white", color:state?"white":"black"}}>
      <Page />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/service' element={<Service/>}></Route>
      </Routes>
    </div>
    </GlobalData.Provider>

  );
}

export default App;
