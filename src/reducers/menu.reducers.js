import { CHANGE_MENU } from '../actions/menu.actions'

/**
 * zadefinovanie poloziek menu
 */
const userMenu = {
    always: [{title:'Doma mám', isSelected:true}],
    logged: [{title:'Úspechy'}, {title:'Chcem predať'}],
    notLogged: [{title:'Prihlásiť', toggleModal:true}]
}

/**
 * da do state - u polozky menu, ci uz prihlaseneho alebo neprihlaseneho uzivatela
 */
const menuReducer = (state = {}, action) => {
  switch(action.type){
    case CHANGE_MENU:
      let changeToMenu = userMenu.notLogged
      if (action.menu.logged === true) {
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
