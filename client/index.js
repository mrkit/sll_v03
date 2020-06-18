import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from './store';
import './stylesheets/style.scss';
import App from './components/App';

const hotRender = Component => (
  render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <Component/>
        </Router>
      </Provider>
    </AppContainer>
    , 
    document.getElementById('root')
  )
);

hotRender(App);

if(module.hot){
  module.hot.accept('./components/App', () => {
    const NextRootContainer = require('./components/App').default;
    hotRender(NextRootContainer);
  }); 
}