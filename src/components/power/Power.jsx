import React from 'react'
import './Power.css'

const Power = () => {
  return (
    <div name='power' className='power'>
        <div className="container">
            <div className="top">
                <h1>Power</h1>
            </div>
            <div className='bottom'>
                <button className='btn btn-dark'>Vroom</button>
                <button className='btn-power'>Vroom</button>
            </div>
        </div>
    </div>
  )
}

export default Power