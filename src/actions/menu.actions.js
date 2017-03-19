import { toggleLogin } from './login.actions'

export const CHANGE_MENU = 'CHANGE_MENU'
/**
 * zmeni uzivatelske menu
 */
export const changeMenu = menu => ({type: CHANGE_MENU, menu})
/**
 * disptachne akciu na skrytie/otvorenie modalneho okna
 */
export const toggleLoginModal = toggle => dispatch => {
  dispatch(toggleLogin(toggle))
}
