import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Calculator from '../src/Calculator/Calculator'

import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware()
));


ReactDOM.render(<Provider store={store}>
                  <Calculator/>
                </Provider>,
                document.getElementById('root'));
