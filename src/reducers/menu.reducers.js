import { CHANGE_MENU } from '../actions/menu.actions'

/**
 * zadefinovanie poloziek menu
 */
const userMenu = {
    always: [{title:'Doma mám', isSelected:true}],
    logged: [{title:'Úspechy'}, {title:'Chcem predať'}],
    notLogged: [{title:'Prihlásiť', toggle:true}]
}

/**
 * da do state - u polozky menu, ci uz prihlaseneho alebo neprihlaseneho uzivatela
 */
const menuReducer = (state = {items:[ ...userMenu.always, ...userMenu.notLogged]}, action) => {
  switch(action.type){
    case CHANGE_MENU:
      let changeToMenu = userMenu.notLogged
      if (action.menu.logged === true) {
        changeToMenu = userMenu.logged
      }
      return {items:[ ...userMenu.always, ...changeToMenu]}
    default:
      return state
  }
}

export default menuReducer
