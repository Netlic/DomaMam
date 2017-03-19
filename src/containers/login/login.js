import React, { Component } from 'react'

import { connect } from 'react-redux'
import LoginModal from '../../components/login/loginModal'
/**
 * modalne prihlasovacie okno, z bootstrapu
 */
class Login extends Component {
  render(){
    const data = this.props.loginData
    const dispatch = this.props.dispatch
    return(
      <LoginModal dispatch={dispatch} data={data}/>
    )}
}

function select(state) {
  return {
    loginData: state.login
  };
}

export default connect(select)(Login)
