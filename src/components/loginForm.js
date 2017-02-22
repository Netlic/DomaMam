/**
nastylovane policka na meno a heslo
*/
import LoginInput from './loginInput'
/**
nastylovane buttony vratane submitu
*/
import LoginBtn from './loginButton'
import React, { Component} from 'react'

/**
prihlasovaci a registracny formular
*/
class LoginForm extends Component {
  render() {
    return(
      <form onSubmit={this._onSubmit.bind(this)}>
        <LoginInput onChange={this._changeUser.bind(this)}/>
        <LoginInput placeholder="heslo" type="password" onChange={this._changePass.bind(this)}/>
        <LoginBtn/>
        <LoginBtn className="btn btn-warning" text="Registrovať"/>
        <div>
          <div className="col-lg-4 register-delimiter">
          </div>
          <div className="col-lg-4 text-center register-or">
            alebo
          </div>
          <div className="col-lg-4 register-delimiter">
          </div>
        </div>
      </form>
    )
  }

  _onSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.props.data.user, this.props.data.pass);
  }

  _changeUser(evt) {
    alert('bu')
  }

  _changePass(evt) {

  }
}

LoginForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  data: React.PropTypes.object.isRequired
}

export default LoginForm
