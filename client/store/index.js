import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';


export default createStore(reducer, applyMiddleware(thunk, logger));