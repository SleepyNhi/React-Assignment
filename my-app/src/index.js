import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import store from './store/index';
import {Provider} from 'react-redux';

const rootEl = document.getElementById('root')


const render = () => ReactDOM.render(
    <Provider store={store}>
        <App
            showModal={store.getState.showModal}
        />
    </Provider>,
    rootEl
  )
  
  render()
  store.getState();
  store.subscribe(render);