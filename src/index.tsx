import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { counterReducer, initialState } from 'reducer'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import 'semantic-ui-css/semantic.min.css'

const store = createStore(counterReducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
)
