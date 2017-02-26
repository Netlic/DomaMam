import React from 'react'

const LoginBtn = ({ text = "Prihlásiť", className = "btn btn-primary" }) => {
  return (
    <div className="login-input col-lg-12 login-submit">
      <input type="submit" className={className} value={text}/>
    </div>
  )
}

export default LoginBtn
