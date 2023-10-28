import React from 'react'
export default function Login() {
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
                <input type="email" placeholder='email...' className='loginInput'/>
                <input type="password" placeholder='password...' className='loginInput'/>
            <button className='loginButton'>Login</button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegisterButton">Create a new Account</button>
            </div>
        </div>
      </div>
    </div>
  )
}
