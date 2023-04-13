import React, { useEffect, useState } from "react";
import "./unsplash.css";

export default function Unsplash() {
  const [splashdata, setsplashdata] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("profile");

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=3&query=${search}&client_id=PixAc5pCaRRuZrVgeswuT38n1N3NVkj6ytgPAbIfZFA`
    )
      .then((res) => res.json())
      .then((data) => {
        setsplashdata(data.results);
      });
      console.log(splashdata)
  }, [search]);
  
  return (
    <div className="unsplash">
      <div className="header">
        <h1>Unsplash data</h1>
        <div className="inputbox">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            onClick={() =>{
              setSearch(input);
              setInput("");
            }}
          >
            Search
          </button>
        </div>
      </div>
      <h3 style={{margin:'1rem', marginTop:"0"}}>You are looking at <b style={{color:'red'}}>{search}</b> related Images</h3>
      <div className="images">
        {splashdata.length>0?splashdata.map((ele) => {
          return (
            <div >
              <div className="userdata">
                <p>{ele.user.name}</p>
                <p>{ele.created_at}</p>
              </div>
              <img
                src={ele.user.profile_image.large}
                alt=""
                width={300}
                height={300}
                className="image"
              />
            </div>
          );
        }):<h1 style={{color:'red'}}>please search for another keyword</h1>}
      </div>
    </div>
  );
}
