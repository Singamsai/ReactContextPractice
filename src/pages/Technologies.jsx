import React from 'react'
import './technologies.css'
import { Link, Outlet } from 'react-router-dom'

export default function Technologies() {
  return (
    <div className='techcontainer'>
      <div className='leftcontainer'>
        <Link to='html'><p>Html</p></Link>
        <Link to='css'><p>CSS</p></Link>
        <Link to='js'><p>JavaScript</p></Link>
        <Link to='react'><p>React</p></Link>
      </div>
      <div className='rightcontainer'>
        <Outlet/>
      </div>
    </div>
  )
}
