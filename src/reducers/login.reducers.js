import { SET_AUTH, CHANGE_FORM, TOGGLE_LOGIN } from '../actions/login.actions'

const assign = Object.assign || require('object.assign');

const loggedUser = {
  formState: {
    user: '',
    pass: '',
  },
  loggedIn: false,
  isLoginModalShown: false
}

const loginReducer = (state = loggedUser, action) => {
  switch(action.type){
    case TOGGLE_LOGIN:
      return assign({}, state, {
        isLoginModalShown: action.toggle
      })
    case CHANGE_FORM:
      return assign({}, state, {
        formState: action.newState.formState
      })
    case SET_AUTH:
      return assign({}, state, {
        loggedIn: action.auth
      })
    default:
      return state
  }
}

export default loginReducer
