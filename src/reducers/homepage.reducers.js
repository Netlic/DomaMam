import {ADD_CATEGORY, REMOVE_CATEGORY} from '../actions/homepage.actions.js'

const categories = (state = [], action) => {
  switch(action.type) {
    case ADD_CATEGORY:
      return [
        ...state,
        {
          text: action.text,
        }
      ]
    default:
      return state
  }
}

export default categories
