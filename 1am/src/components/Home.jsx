import React from 'react'
import am from "../assets/logo.svg";
import "../styles/home.css";


const Home = () => {
  return (
    <>
      <div className="container">
        <div className="hero">
          <h2>REVOLUTIONIZE <br/> YOUR CODING WITH</h2>
          <img src={am}/>
        </div>
      </div>
    </>
  )
}

export default Home
