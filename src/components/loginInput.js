import React from 'react'

const LoginInput = ({ type = "text", placeholder = "prihlasovacie meno", onChange = "" }) => {
  return (
    <div className="login-input">
      <div>
        <input type={type} className="" placeholder={placeholder}/>
      </div>
    </div>
  )
}

export default LoginInput
