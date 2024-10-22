import React from 'react'
import am from "../assets/logo.svg";
import "../styles/home.css";
import arr from "../assets/arrow.svg"
import line from "../assets/line.svg"


const Home = () => {
  return (
    <>
{/* Navbar */}
<nav className="navbar">
        <div className="logo">
          <img src={am} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Build</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    

      <div className="container">  
        <div className="hero">
        <p className="title">REVOLUTIONIZE <br/> YOUR CODING WITH</p>
          <img src={am}/>
          </div>
          <h6>Scroll to Explore</h6>
          <div className="arrow">
          <img src={line} />
          <img src={arr} />
      
        </div>
      </div>
    </>
  )
}

export default Home
