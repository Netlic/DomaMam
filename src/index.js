import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/homepage.reducers.js'
import Homepage from './components/homepage.app.js'

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Homepage />
  </Provider>,
  document.getElementById('root')
)
