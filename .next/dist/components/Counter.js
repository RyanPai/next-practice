'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _about = require('../redux/modules/about');

var aboutAction = _interopRequireWildcard(_about);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/ryan.pai/dev/www/next-practice/components/Counter.js';


var Counter = function (_React$Component) {
  (0, _inherits3.default)(Counter, _React$Component);

  function Counter() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Counter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Counter.__proto__ || (0, _getPrototypeOf2.default)(Counter)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      count: 0
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Counter, [{
    key: 'add',
    value: function add() {
      var _props = this.props,
          about = _props.about,
          addCount = _props.addCount;

      var count = about.counter.count + 1;
      addCount(count);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // const {getProduct} = this.props;
      // getProduct()
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          about = _props2.about,
          getProduct = _props2.getProduct;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, 'Count is: ', about.counter.count), _react2.default.createElement('button', { onClick: function onClick() {
          return _this2.add();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, 'Add'));
    }
  }]);

  return Counter;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    about: state.about
  };
}, aboutAction)(Counter);