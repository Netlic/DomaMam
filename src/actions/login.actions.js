import bcrypt from 'bcryptjs'
import genSalt from '../utils/salt'
import { browserHistory } from 'react-router'
import { changeMenu } from './menu.actions'

export const SET_AUTH = "SET_AUTH"
export const CHANGE_FORM = "CHANGE_FORM"
export const TOGGLE_LOGIN = "TOGGLE_LOGIN"

export const changeForm = newState => ({type: CHANGE_FORM, newState})
export const authentify = auth => ({type: SET_AUTH, auth})
export const toggleLogin = toggle => ({type: TOGGLE_LOGIN, toggle})

export const login = (user, pass) => dispatch => {
  const salt = genSalt(user);
  bcrypt.hash(pass, salt, (err, hash) => {
    if (err) {
      //nieco urobit, ak error
    }
    browserHistory.push('/');
    dispatch(authentify(true))
    dispatch(toggleLogin(false))
    dispatch(changeMenu({logged: true}))
  })
}
