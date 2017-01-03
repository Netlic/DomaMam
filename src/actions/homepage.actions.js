import categoriesApi from '../api/categories.js'

/*
 * action types
 */

export const ADD_CATEGORY = "ADD_CATEGORY"
export const REMOVE_CATEGORY = "REMOVE_CATEGORY"
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES"

/*
 * action creators
 */
export const addCategory = categoryName => ({type : ADD_CATEGORY, categoryName})

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
