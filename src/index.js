import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Homepage from './components/homepage.app.js'

const store = createStore();

render(
  <Provider store={store}>
    <Homepage />
  </Provider>,
  document.getElementById('root')
)
