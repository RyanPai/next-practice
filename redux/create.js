import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './modules/reducer';
import isomorphicFetch from '../helpers/isomorphicFetch.js';
import middlewareAPI from './middleware/middlewareAPI';
const ajax = new isomorphicFetch();

export const initStore = (initialState) => {
  const middleware = [middlewareAPI(ajax),thunkMiddleware];
  return createStore(reducer, initialState, applyMiddleware(...middleware))
}