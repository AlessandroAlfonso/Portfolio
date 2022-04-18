import React from 'react'
import './home.css'


function home() {
  return (
    <div>
        <div className='left'></div>
        <div className='head'>
        <a className='home'>
            <h2>Home</h2>
        </a>
        
            <div className='sidebar'>
                <a>
                    <svg className=''>

                    </svg>
                </a>
            </div>

            <h1 className='logo'>Sandro</h1>
            <button>
                <a>

                </a>
            </button>

            <a className='contactme'>
                <h3>Don't be shy say hi..</h3>
            </a>

            <div className='bottom'>
                <a className='about'>
                    <h2>About</h2>
                </a>

                <a className='skills'>
                    <h2>Skills</h2>
                </a>
            </div>
    </div>
        

        

        <div className='container container_flex' >
            <div className='left_b'>
                <div className='left_content left_content_flex'>
                    <h1>Hey There, </h1>
                    <h3>I'm Alessandro Alfonso</h3>
                    <h3>An aspiring UI/UX Designer</h3>
                </div>
            </div>

            <div className='right right_content_flex'>
                <img className='pic' src="/DP.png" />
            </div>
        </div>
        
        
   

    </div>
    
  )
}

export default home