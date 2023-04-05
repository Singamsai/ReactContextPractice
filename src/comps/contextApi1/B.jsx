import {useContext} from 'react'
import C from './C'
import { globalData } from './A';

const B = () => {
  const context = useContext(globalData);
  return (
    <div >
      <br/>
      <h2>Click to see mumbai temparture</h2>
      <br/><button onClick={()=>{
        context.setData("mumbai")
        context.setTemp("22deg")
    }}>click here</button>
      <C/>
    </div>
  )
}

export default B