'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _create = require('../redux/create');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _isomorphicFetch = require('../helpers/isomorphicFetch.js');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _Main = require('../components/Main');

var _Main2 = _interopRequireDefault(_Main);

var _Counter = require('../components/Counter');

var _Counter2 = _interopRequireDefault(_Counter);

var _about = require('../redux/modules/about');

var aboutAction = _interopRequireWildcard(_about);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/ryan.pai/dev/www/next-practice/pages/about.js?entry';

// const ajax = new isomorphicFetch();

var About = function (_Component) {
    (0, _inherits3.default)(About, _Component);

    function About() {
        (0, _classCallCheck3.default)(this, About);

        return (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).apply(this, arguments));
    }

    (0, _createClass3.default)(About, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_Main2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('section', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement(_Counter2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'About'), 'is from ' + (this.props.isServer ? 'Server' : 'Client'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, '' + this.props.custom), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, 'flag = ' + this.props.about.product.flag), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'title = ' + (this.props.about.product.flag ? this.props.about.product.data.title : '')))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
                var store = _ref2.store,
                    isServer = _ref2.isServer,
                    pathname = _ref2.pathname;
                var getProduct, addCount, action;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                getProduct = aboutAction.getProduct, addCount = aboutAction.addCount;
                                action = getProduct();

                                if (!isServer) {
                                    _context.next = 6;
                                    break;
                                }

                                _context.next = 5;
                                return store.dispatch(action);

                            case 5:
                                return _context.abrupt('return', { custom: 'custom server', isServer: isServer });

                            case 6:
                                store.dispatch(action);
                                return _context.abrupt('return', { custom: 'custom client', isServer: isServer });

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return About;
}(_react.Component);

exports.default = (0, _nextReduxWrapper2.default)(_create.initStore, function (state) {
    return { about: state.about };
})(About);