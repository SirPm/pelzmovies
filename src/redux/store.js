import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

const middlewares = [ thunk, logger ];

export const store = createStore( rootReducer, applyMiddleware( ...middlewares ) );