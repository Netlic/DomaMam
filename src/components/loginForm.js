/**
 * nastylovane policka na meno a heslo
 */
import LoginInput from './loginInput'
/**
 * nastylovane buttony vratane submitu
 */
import LoginBtn from './loginButton'
/**
 * funkcia, ktora vytvori akciu zmenu stavu formulara, tj meno heslo
 */
import { changeForm } from '../actions/login.actions'
import React, { Component} from 'react'
const assign = Object.assign || require('object.assign');
/**
 * prihlasovaci a registracny formular
 */
class LoginForm extends Component {
  render() {
    return(
      <form onSubmit={this._onSubmit.bind(this)}>
        <LoginInput className="blabla" onChange={this._changeUser.bind(this)}/>
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

  /**
   * pri odoslani formulara sa disptachne akcie predana z predka
   */
  _onSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.props.data.formState.user, this.props.data.formState.pass);
  }

  /**
   * zmena uzivatelskeho mena
   */
  _changeUser(evt) {
    let newState = this._mergeWithCurrentState({ formState: {
      user: evt.target.value,
      pass: this.props.data.formState.pass
    }})
    this._emitChange(newState)
  }

  /**
   * zmena uzivatelskeho hesla
   */
  _changePass(evt) {
    let newState = this._mergeWithCurrentState({ formState: {
      user: this.props.data.formState.user,
      pass: evt.target.value
    }})
    this._emitChange(newState)
  }

  /**
   * zmena stavu formulara
   */
  _emitChange(newState) {
    this.props.dispatch(changeForm(newState));
  }

  // spoji aktualny state s novym state - om
  _mergeWithCurrentState(change) {
    return assign(this.props.data, change);
  }
}

LoginForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  data: React.PropTypes.object.isRequired
}

export default LoginForm
