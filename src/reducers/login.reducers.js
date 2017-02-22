import { SET_AUTH } from '../actions/login.actions'

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
    case SET_AUTH:
      return assign({}, state, {
        loggedIn: action.newState
      })
    default:
      return state
  }
}

export default loginReducer
