'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

require('isomorphic-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {

    var adjustedPath = path[0] !== '/' ? '/' + path : path;

    if (process.env.NODE_ENV !== 'production') {
        // console.log('api=' + config.apiHost + adjustedPath)
    }

    if (path[0] != 'h') {
        // return config.apiHost + adjustedPath;
    } else {
        return path;
    }
}

var isomorphicFetch = function isomorphicFetch(req) {
    var _this = this;

    (0, _classCallCheck3.default)(this, isomorphicFetch);

    methods.forEach(function (method) {
        return _this[method] = function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(path) {
                var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    params = _ref2.params,
                    data = _ref2.data;

                var request, res;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                request = void 0, res = void 0;
                                // const request = fetch[method](formatUrl(path)); 

                                _context.prev = 1;
                                _context.next = 4;
                                return fetch(path, {
                                    method: method
                                });

                            case 4:
                                request = _context.sent;
                                _context.next = 7;
                                return request.json();

                            case 7:
                                res = _context.sent;
                                _context.next = 13;
                                break;

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context['catch'](1);

                                console.log(_context.t0);

                            case 13:
                                return _context.abrupt('return', res);

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this, [[1, 10]]);
            }));

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        }();
    });
};

exports.default = isomorphicFetch;