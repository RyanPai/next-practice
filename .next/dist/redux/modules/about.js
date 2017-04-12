'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;
exports.addCount = addCount;
exports.getProduct = getProduct;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ADD_COUNT = 'ADD_COUNT';
var GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST';
var GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
var GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR';

var initialState = {
  counter: {
    count: 0
  },
  product: {
    loaded: false
  }

};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case ADD_COUNT:

      return (0, _extends3.default)({}, state, {
        counter: {
          count: action.count
        }

      });
    case GET_PRODUCT_REQUEST:
      return (0, _extends3.default)({}, state, {
        product: {
          loading: true
        }
      });
    case GET_PRODUCT_SUCCESS:
      return (0, _extends3.default)({}, state, {
        product: (0, _extends3.default)({}, action.result, {
          loading: false,
          loaded: true
        })
      });
    case GET_PRODUCT_ERROR:
      return (0, _extends3.default)({}, state, {
        product: (0, _extends3.default)({}, action.result, {
          loading: false,
          loaded: false
        })
      });
    default:
      return state;
  }
}

function addCount(count) {
  return {
    type: ADD_COUNT,
    count: count
  };
}

function getProduct(id) {

  return {
    types: [GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_ERROR],
    promise: function promise(fetch) {
      return fetch.get('http://servicetest01.pipimy.com.tw/api/v1/product/2979');
    }
  };
}