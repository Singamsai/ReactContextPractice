import React, { useContext } from 'react'
import { globalData } from './A'
import D from './D';
const C = () => {
    const context = useContext(globalData);
    console.log(context)
  return (
    <div><br/>
      <h3>Click to see the dehradun temparature</h3><br/>
      <button onClick={()=>{context.setData("dehradun") 
      context.setTemp("23deg")
    }}>click here</button>
      <D/>
    </div>
  )
}

export default C
