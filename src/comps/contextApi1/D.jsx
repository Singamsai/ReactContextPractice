import {useContext} from 'react'
import { globalData } from './A';

const D = () => {
    const context = useContext(globalData);
  return (
    <div><br/>
      <h3>Click to see hyderabad location</h3><br/>
      <button onClick={()=>
        {context.setData("hyderabad")
        context.setTemp("24deg")
      }  
        }>click here</button>

    </div>
  )
}

export default D
