import { ADD_CATEGORY, REMOVE_CATEGORY, RECEIVE_CATEGORIES, TOGGLE_CATEGORIES } from '../actions/homepage.actions.js'
import { combineReducers } from 'redux'

const assign = Object.assign || require('object.assign');

const categoryAddRemove = (state = {}, action) => {
  switch(action.type) {
    case ADD_CATEGORY:
      return assign({}, state, {
        categories:{categoriesList: ['tralala']}
      })
      /*return [
        ...state,
        {
          text: action.text,
        }
      ]*/
    case REMOVE_CATEGORY:
      return state
    default:
      return state
  }
}

const categoriesList = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories.map(categories => categories.name)
    default:
      return state
  }
}

const allCategories = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        ...action.categories.reduce((obj, category) => {
          obj[category.name] = category
          return obj
        }, {})
      }
    default:
      const { categoryId } = action
      if (categoryId) {
        return {
          ...state,
          [categoryId]: allCategories(state[categoryId], action)
        }
      }
      return state
  }
}

const categoryDetails = (state = {visible: false, label: 'category name here'}, action) => {
  switch (action.type) {
    case TOGGLE_CATEGORIES:
      return assign({}, state, {
        visible: action.data.toggle,
        label: action.data.label,
        items: action.data.items
      })
    default:
      return state
  }
}

export default combineReducers({
  categoryAddRemove,
  categoriesList,
  allCategories,
  categoryDetails
})

export const getCategory = (state, name) => state.allCategories[name]

export const getAllCategories = state => state.categoriesList.map(name => getCategory(state, name))
