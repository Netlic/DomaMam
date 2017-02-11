import React from 'react'

const LoginInput = ({ placeholder = "prihlasovacie meno" }) => {
  return (
    <div className="login-input">
      <div>
        <input type="text" className="" placeholder={placeholder}/>
      </div>
    </div>
  )
}

export default LoginInput
