import { CHANGE_MENU } from '../actions/menu.actions'

const userMenu = {
    always: ['Doma mám'],
    logged: ['Úspechy', 'Chcem predať'],
    notLogged: ['Prihlásiť']
}

const menuReducer = (state = {}, action) => {
  switch(action.type){
    case CHANGE_MENU:
      let changeToMenu = userMenu.notLogged
      if (action.logged === true) {
        changeToMenu = userMenu.logged
      }
    return {items:[ ...userMenu.always, ...changeToMenu]}
    default:
      let restMenu = userMenu.notLogged
      if (typeof action.logged !== 'undefined' && action.logged === true) {
        restMenu = userMenu.logged
      }
      return {items:[ ...userMenu.always, ...restMenu]}
  }
}

export default menuReducer
