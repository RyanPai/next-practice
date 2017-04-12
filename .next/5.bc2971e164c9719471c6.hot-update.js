webpackHotUpdate(5,{

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(22);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(23);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _create = __webpack_require__(588);

var _nextReduxWrapper = __webpack_require__(584);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _isomorphicFetch = __webpack_require__(561);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _Main = __webpack_require__(587);

var _Main2 = _interopRequireDefault(_Main);

var _Counter = __webpack_require__(586);

var _Counter2 = _interopRequireDefault(_Counter);

var _about = __webpack_require__(556);

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
            console.log(this.props.about.product.data.title);
            return _react2.default.createElement(_Main2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement('section', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_Counter2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'About'), 'is from ' + (this.props.isServer ? 'Server' : 'Client'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, '' + this.props.custom), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'flag = ' + this.props.about.product.flag))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
                var store = _ref2.store,
                    isServer = _ref2.isServer,
                    pathname = _ref2.pathname,
                    query = _ref2.query;
                var getProduct, addCount, action;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                getProduct = aboutAction.getProduct, addCount = aboutAction.addCount;
                                action = getProduct();

                                if (!isServer) {
                                    _context.next = 5;
                                    break;
                                }

                                store.dispatch(action);

                                return _context.abrupt('return', store.dispatch(action).then(function (r) {

                                    return { custom: 'custom server', isServer: isServer };
                                }));

                            case 5:
                                store.dispatch(action);
                                return _context.abrupt('return', { custom: 'custom client', isServer: isServer });

                            case 7:
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/ryan.pai/dev/www/next-practice/pages/about.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/ryan.pai/dev/www/next-practice/pages/about.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(82)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/about")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz9lZDgxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0I7Ozs7QUFDVTs7QUFHbkI7Ozs7QUFHcUI7Ozs7QUFDWDs7OztBQUNHOzs7O0FBQ1o7O0lBQXNCOzs7Ozs7OztBQUM5Qjs7SUFDTTs7Ozs7Ozs7Ozs7NENBcUJEOzs7aUNBR0c7b0JBQVEsSUFBSSxLQUFLLE1BQU0sTUFBTSxRQUFRLEtBQ3JDO21DQUNLOzs4QkFBRDtnQ0FDSTtBQURKO0FBQUEsK0JBQ0k7OzhCQUFBO2dDQUNJO0FBREo7QUFBQSwrQkFDSzs7OEJBQUQ7Z0NBQ0E7QUFEQTtBQUFBLGdDQUNBOzs4QkFBQTtnQ0FDSTtBQURKO0FBQUEsK0JBQ0k7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSx1Q0FDYSxLQUFLLE1BQU0sV0FBVyxXQUNuQzs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLG9CQUFPLEtBQUssTUFDWjs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLDJCQUFjLEtBQUssTUFBTSxNQUFNLFFBTWxEOzs7Ozs7b0JBdEMrQjtvQkFBTztvQkFBVTtvQkFBVTs7Ozs7aUNBQy9DOzZDQUF3QixZQUF4QixZQUFZLFdBQVksWUFDMUI7eUNBQVM7O3FDQUVYOzs7QUFDQTs7c0NBQU0sU0FBVTs7dUVBRUgsU0FBUyxRQUFRLEtBQUssVUFBQyxHQUU1Qjs7MkNBQU8sRUFBQyxRQUFRLGlCQUFnQixVQUN2QztBQUhNOztpQ0FNWDtzQ0FBTSxTQUFVO2lFQUNWLEVBQUMsUUFBUSxpQkFBZ0IsVUFBekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQmI7O3FFQUFtQyxVQUFDLE9BQUQ7V0FBVSxFQUFDLE9BQU8sTUFBTTtBQUE1QyxDQUFVLEVBQTJDLE8iLCJmaWxlIjoiNS5iYzI5NzFlMTY0Yzk3MTk0NzFjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwge0NvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gJy4uL3JlZHV4L2NyZWF0ZSc7XG5cblxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuXG5cbmltcG9ydCBpc29tb3JwaGljRmV0Y2ggZnJvbSAnLi4vaGVscGVycy9pc29tb3JwaGljRmV0Y2guanMnO1xuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50cy9NYWluJztcbmltcG9ydCBDb3VudGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ291bnRlcic7XG5pbXBvcnQgICogYXMgYWJvdXRBY3Rpb24gZnJvbSAnLi4vcmVkdXgvbW9kdWxlcy9hYm91dCc7XG4vLyBjb25zdCBhamF4ID0gbmV3IGlzb21vcnBoaWNGZXRjaCgpO1xuY2xhc3MgQWJvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBhc3luYyAgZ2V0SW5pdGlhbFByb3BzKHsgc3RvcmUsIGlzU2VydmVyLCBwYXRobmFtZSwgcXVlcnkgfSkge1xuICAgICAgICBjb25zdCB7IGdldFByb2R1Y3QsIGFkZENvdW50fSA9IGFib3V0QWN0aW9uO1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBnZXRQcm9kdWN0KCk7XG5cbiAgICAgICAgaWYgKGlzU2VydmVyKSB7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCggYWN0aW9uKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGFjdGlvbikudGhlbigocik9PntcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge2N1c3RvbTogJ2N1c3RvbSBzZXJ2ZXInLGlzU2VydmVyfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goIGFjdGlvbik7XG4gICAgICAgcmV0dXJuIHtjdXN0b206ICdjdXN0b20gY2xpZW50Jyxpc1NlcnZlcn07XG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgIFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5hYm91dC5wcm9kdWN0LmRhdGEudGl0bGUpXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxNYWluPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8Q291bnRlci8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+QWJvdXQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAge2BpcyBmcm9tICR7KHRoaXMucHJvcHMuaXNTZXJ2ZXIpPyAnU2VydmVyJyA6ICdDbGllbnQnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57YCR7dGhpcy5wcm9wcy5jdXN0b219YH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57YGZsYWcgPSAke3RoaXMucHJvcHMuYWJvdXQucHJvZHVjdC5mbGFnfWB9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L01haW4+XG4gICAgICAgIClcbiAgICB9XG59XG5cbiBleHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoaW5pdFN0b3JlLChzdGF0ZSk9Pih7YWJvdXQ6IHN0YXRlLmFib3V0fSkpKEFib3V0KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2Fib3V0LmpzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==