import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GlobalData } from '../App';

const Page = () => {
    const data = useContext(GlobalData);
  return (
    <div>
        <p>Geekster</p>
        <Link to="/home">
          <p>Home</p>
        </Link>
        <Link to="/contact">
          <p>contact</p>
        </Link>
        <Link to="/service">
          <p>Service</p>
        </Link>
        <button onClick={()=>{
            data.setstate(!data.state);
        }}>Toggle Theme to Dark</button>
    </div>
  )
}

export default Page
