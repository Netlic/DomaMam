/**
 * samotny prihlasovaci/registracny formular
 */
import LoginForm from '../../components/login/loginForm'
/**
 * akcia, ktora by sa mala dispatchnut po odoslani formulara
 */
import { login } from '../../actions/login.actions'
import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'

class LoginModal extends Component {
  render(){
    return(
      <Modal show={this.props.data.isLoginModalShown}>
        <Modal.Header closeButton>
          <div className="col-lg-12 text-center">
            <div>
              <span className="glyphicon glyphicon-lock"></span>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="login">
            <LoginForm dispatch={this.props.dispatch} data={this.props.data} onSubmit={this._login}/>
          </div>
        </Modal.Body>
      </Modal>
    )
  }

  /**
   * dispatchne login
   */
  _login (user, pass, dispatch) {
    dispatch(login(user, pass))
  }
}

export default LoginModal
