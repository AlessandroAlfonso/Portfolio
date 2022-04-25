import React from 'react'
import './home.css'


function home() {
  return (
    <div className="i">
    <div className="i-left">
      <div className="i-left-wrapper">
        <h2 className="i-intro">Hello, My name is</h2>
        <h1 className="i-name">Alessandro Alfonso</h1>
        <div className="i-title">
          <div className="i-title-wrapper">
         
            <div className="i-title-item">Aspiring UX/UI Designer</div>
            <div className="i-title-item">Aspiring Frontend Developer</div>
          </div>
        </div>
        <p className="i-desc">
          <h3>Welcome to my Simple Portfolio</h3>
        </p>
      </div>
      <svg
        width="75"
        height="75"
        viewBox="0 0 75 75"
        fill="none"
        stroke="black"
        className="i-scroll"
        xmlns="http://www.w3.org/2000/svg"
      >
      </svg>
    </div>
    <div className="i-right">
      <div className="i-bg"></div>
      <img className='i-img' src="/DP.png" />
    </div>
  </div>
    
  )
}

export default home

