import categoriesApi from '../api/categories.js'
//import { emptyValue } from '../validatorFunctions'

/*
 * action types
 */

export const ADD_CATEGORY = "ADD_CATEGORY"
export const REMOVE_CATEGORY = "REMOVE_CATEGORY"
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES"
export const TOGGLE_CATEGORIES = "TOGGLE_CATEGORIES"

/*
 * action creators
 */
export const addCategory = categoryName => ({
  type : ADD_CATEGORY,
  payload: {
    name:''
  },
  meta:{
    validator:{
      name:{
        func:(name, state, payload) => 0 <= name.length,//emptyValue(name, state, payload),
        msg: 'Názov kategórie musí byť zadaný'
      }
    }
  },categoryName})

export const removeCategory = categoryName => ({type : REMOVE_CATEGORY, categoryName})

const receiveCategories = categories => ({type: RECEIVE_CATEGORIES, categories: categories})

export const getAllCategories = () => dispatch => {
  categoriesApi.getCategories(categories => {
    dispatch(receiveCategories(categories))
  })
}

export const addCategoryToList = name => dispatch => {
  dispatch(addCategory(name))
}

export const toggleDetails = data => ({type: "TOGGLE_CATEGORIES", data})

export const toggleCategoryDetails = (toggle, label, items) => dispatch => {
  let data = {toggle: toggle, label: label, items: items}
  dispatch(toggleDetails(data))
}
