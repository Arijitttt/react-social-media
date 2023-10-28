import React from 'react'

export default function Register() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Zzzzzzz</h3>
            <span className="loginDesc">
                Read & Write with your surroundings
            </span>
        </div>
        <div className="loginRight">
            <div className="loginbox">
                <input type="email" placeholder='Username' className='loginInput'/>
                <input type="email" placeholder='Email' className='loginInput'/>
                <input type="password" placeholder='Password' className='loginInput'/>
                <input type="password" placeholder='password again' className='loginInput'/>
            <button className='loginButton'>SignUp</button>
            
            <button className="loginRegisterButton">Log into Account</button>
            </div>
        </div>
      </div>
    </div>
  )
}
