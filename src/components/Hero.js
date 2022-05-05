import React from 'react'
import './nav.css'

function Hero({textBig, textHeader, textPara}) {
  return (
    <div className="hero">
        
        <div>
            <h4>{textHeader}</h4>
        </div>


            <button  className="button">Button</button>
            <button  className="button button2">Button</button>
    </div>
  )
}

export default Hero