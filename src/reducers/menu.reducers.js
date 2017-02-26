import { CHANGE_MENU } from '../actions/menu.actions'

const userMenu = {
    always: ['Doma mám'],
    logged: ['Úspechy', 'Chcem predať'],
    notLogged: ['Prihlásiť']
}

const menuReducer = (state = {}, action) => {
  switch(action.type){
    case CHANGE_MENU:
      console.log(state)
      return state
    default:
      console.log(action)
      return {items:[ ...userMenu.always]}
  }
}

export default menuReducer
