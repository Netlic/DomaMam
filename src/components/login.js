import React, { Component } from 'react'
/**
akcia, ktora by sa mala dispatchnut po odoslani formulara
*/
import login from '../actions/loginActions'
/**
samotny prihlasovaci/registracny formular
*/
import LoginForm from './loginForm'

/**
modalne prihlasovacie okno, z bootstrapu
*/
class Login extends Component {
  render(){
    //const dispatch = this.props.dispatch
    return(
      <div className="modal fad" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content col-lg-6 col-lg-offset-3">
            <div className="modal-header" style={{border:'none'}}>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="col-lg-12 text-center">
                <div>
                  <span className="glyphicon glyphicon-lock"></span>
                </div>
              </div>
            </div>
            <div className="modal-body ">
              <div className="login">
                <LoginForm onSubmit={this._login}/>
              </div>
            </div>
            <div className="modal-footer" style={{border:'none'}}></div>
          </div>
        </div>
      </div>
    )}

    /**
    dispatchne login
    */
    _login(user, pass) {
      this.props.dispatch(login(user, pass))
    }
}

export default Login
