import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './stylesheets/style.scss';
import App from './components/App';

render(<Router><Provider store={store}><App/></Provider></Router>, document.getElementById('root'));