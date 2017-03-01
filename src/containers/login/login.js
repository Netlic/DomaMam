import React, { Component } from 'react'
/**
 * akcia, ktora by sa mala dispatchnut po odoslani formulara
 */
import { login } from '../../actions/login.actions'
/**
 * samotny prihlasovaci/registracny formular
 */
import LoginForm from '../../components/login/loginForm'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'
/**
 * modalne prihlasovacie okno, z bootstrapu
 */
class Login extends Component {
  render(){
    const data = this.props.loginData
    const dispatch = this.props.dispatch
    return(
      <Modal id='login-modal' closeButton>
        <Modal.Header></Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
    )}

    /**
     * dispatchne login
     */
    _login (user, pass, dispatch) {
      dispatch(login(user, pass))
    }
}

function select(state) {
  return {
    loginData: state.login
  };
}

export default connect(select)(Login)
