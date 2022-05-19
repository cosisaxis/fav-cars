import React from 'react'
import './Options.css'

const Options = () => {
  return (
    <div name='options' className='options'>
        <div className="container">
            <div className="top">
                <h1>Options</h1>
            </div>
            <div className='bottom'>
                <button className='btn btn-dark'>Vroom</button>
                <button className='btn'>Vroom</button>
            </div>
        </div>
    </div>
  )
}

export default Options