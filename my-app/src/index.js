import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import store from './store/index';
import {Provider} from 'react-redux';
import Modalapp from './components/modal'

const rootEl = document.getElementById('root')


const render = () => ReactDOM.render(
    <Provider store={store}>
        <App />
        <Modalapp />
    </Provider>,
    rootEl
  )
  
  render()
  store.getState();
  store.subscribe(render);