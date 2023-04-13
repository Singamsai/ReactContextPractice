import React, { useContext, useEffect,useState } from 'react'
import './products.css'
import { Globaldata } from '../App'

export default function Products() {
  const [data, setdata] = useState([])
  const {addtocart} = useContext(Globaldata)
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products').then(res=>res.json()).then((data)=>{setdata(data)})
  },[])
  return (
    <div className='products'>
      <h1>Products</h1>
      <div className='products-data'>
        {data.map((ele)=>{
          return(<div className='product' id={ele.id}>
              <img src={ele.image} width={200} height={200} alt=""/><br/><br/>
              <h2>{ele.category}</h2>
              <p>{ele.title}</p>
              <p>${ele.price}</p>
              <button onClick={()=>{addtocart.push(ele)}}>AddtoCart</button>
          </div>)
        })}
      </div>
    </div>
  )
}
