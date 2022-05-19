import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div name='contact' className='contact'>
            <div className="container">
                <div className="top">
                    <h1>Contact</h1>
                </div>

                <form>
                    <div>
                        <label>Name</label>
                        <input type="text" placeholder='Enter Name' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    {/* <div>
                        <label>Message</label>
                        <textarea cols="10" rows="10" placeholder='Enter your message'></textarea>
                    </div> */}
                    <div className="bottom">
                        <button className="btn btn-dark">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact