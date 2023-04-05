import {useState} from 'react'
import { createContext } from 'react'
import B from './B';

export const globalData = createContext();
const A = () => {
    const [data, setData] = useState("delhi");
    const [temp, setTemp] = useState("21deg")
  return (
    <div style={{textAlign:"center"}}>
      <h1>A component</h1><br/>
        <h2>location: {data}</h2>
        <h2>temp: {temp}</h2><br/>
      <globalData.Provider value={{setData:setData, setTemp:setTemp}}>
        <B/>
      </globalData.Provider>
    </div>
  )
}

export default A
