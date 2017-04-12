'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = apiMiddleware;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function apiMiddleware(fetch) {

    return function (_ref) {
        var dispatch = _ref.dispatch,
            getState = _ref.getState;

        return function (next) {
            return function (action) {
                var promise = action.promise,
                    types = action.types,
                    rest = (0, _objectWithoutProperties3.default)(action, ['promise', 'types']);

                if (!promise) {
                    return next(action);
                }

                var _types = (0, _slicedToArray3.default)(types, 3),
                    REQUEST = _types[0],
                    SUCCESS = _types[1],
                    FAILURE = _types[2];

                next((0, _extends3.default)({}, rest, { type: REQUEST }));

                var actionPromise = promise(fetch);

                actionPromise.then(function (result) {
                    next((0, _extends3.default)({}, rest, { result: result, type: SUCCESS }));
                }, function (error) {

                    next((0, _extends3.default)({}, rest, { error: error, type: FAILURE }));
                }).catch(function (error) {
                    console.error('MIDDLEWARE ERROR:', error);
                    if (process.env.NODE_ENV !== 'production') {
                        console.log(FAILURE);
                    }
                    next((0, _extends3.default)({}, rest, { error: error, type: FAILURE }));
                }).then();

                return actionPromise;
            };
        };
    };
}