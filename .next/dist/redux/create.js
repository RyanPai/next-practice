'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducer = require('./modules/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _isomorphicFetch = require('../helpers/isomorphicFetch.js');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _middlewareAPI = require('./middleware/middlewareAPI');

var _middlewareAPI2 = _interopRequireDefault(_middlewareAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ajax = new _isomorphicFetch2.default();

var initStore = exports.initStore = function initStore(initialState) {
  var middleware = [(0, _middlewareAPI2.default)(ajax), _reduxThunk2.default];
  return (0, _redux.createStore)(_reducer2.default, initialState, _redux.applyMiddleware.apply(undefined, middleware));
};