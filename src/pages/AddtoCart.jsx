import React, { useContext } from 'react'
import { Globaldata } from '../App'
import './addtocart.css'
import { useNavigate } from 'react-router-dom';

export default function AddtoCart() {
  const {addtocart, setaddtocart} = useContext(Globaldata);
  function onClick(id){
    const newlist = addtocart.filter((ele)=>{
      return id !== ele.id;
    })
    setaddtocart(newlist)
  }
  return (
    <div className='cart'>
        <h1>My Cart</h1>    
      {addtocart.map((item)=>{
        return(<div className='cartitems'>
            <img src={item.image} alt=""></img>
            <h4>{item.title}</h4>
            <p>$ {item.price}</p>
            <button className='remove' onClick={()=>{onClick(item.id)
            }}>remove</button>
          </div>)
      })}
    </div>
  )
}
