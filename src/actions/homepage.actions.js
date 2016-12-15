/*
 * action types
 */

export const ADD_CATEGORY = "ADD_CATEGORY"
export const REMOVE_CATEGORY = "REMOVE_CATEGORY"


/*
 * action creators
 */

 export function addCategory(categoryName) {
   return {type : ADD_CATEGORY, categoryName}
 }

 export function remCategory(categoryName) {
   return {type : REMOVE_CATEGORY, categoryName}
 }
