import homepage from './homepage.reducers'
import login from './login.reducers'
import menu from './menu.reducers'
import { combineReducers } from 'redux'

/**
 * finalny reducer pre celu aplikaciu
 */
const reducer = combineReducers({
  categories : homepage,
  login: login,
  menu: menu
})

export default reducer
