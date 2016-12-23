import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { getAllCategories } from './actions/homepage.actions.js'
import Homepage from './components/homepage.app.js'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducers/homepage.reducers.js'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

store.dispatch(getAllCategories())

render(
  (<Provider store={store}>
    <Homepage />
  </Provider>),
  document.getElementById('root')
)
