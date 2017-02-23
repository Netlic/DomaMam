import React from 'react'

const LoginInput = ({ type = "text", placeholder = "prihlasovacie meno", onChange = "" }) => {
  let attrs = {
    'type' : type,
    'placeholder': placeholder
  }
  if (onChange.length > 0) {
    attrs.onChange = onChange
  }
  return (
    <div className="login-input">
      <div>
        <input { ...attrs } />
      </div>
    </div>
  )
}

export default LoginInput
