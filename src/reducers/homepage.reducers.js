import {ADD_CATEGORY, REMOVE_CATEGORY, RECEIVE_CATEGORIES} from '../actions/homepage.actions.js'
import combineReducers from 'redux'

const categoryAddRemove = (state = [], action) => {
  switch(action.type) {
    case ADD_CATEGORY:
      return [
        ...state,
        {
          text: action.text,
        }
      ]
    case REMOVE_CATEGORY:
      return state
    default:
      return state
  }
}

const categoryWriter = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories.map(categories => categories.name)
    default:
      return state
  }
}

export default categoryWriter
/*const categoryHandler = combineReducers(
  categoryAddRemove, categoryWriter
)

export default categoryHandler
*/
