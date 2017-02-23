import { SET_AUTH, CHANGE_FORM } from '../actions/login.actions'

const assign = Object.assign || require('object.assign');

const loggedUser = {
  formState: {
    user: '',
    pass: '',
  },
  loggedIn: false
}

const loginReducer = (state = loggedUser, action) => {
  switch(action.type){
    case CHANGE_FORM:
      return assign({}, state, {
        formState: action.newState.formState
      })
    case SET_AUTH:
      return assign({}, state, {
        loggedIn: action.newState
      })
    default:
      return state
  }
}

export default loginReducer
