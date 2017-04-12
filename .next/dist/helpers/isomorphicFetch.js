'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
        return _this[method] = function (path) {
            var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                params = _ref.params,
                data = _ref.data;

            // const request = fetch[method](formatUrl(path)); 
            var request = fetch(path, {
                method: method
            }).then(function (res) {
                return res.json();
            }).catch(function (error) {
                return error;
            });
            // console.log(request)
            return request;
        };
    });

    /* methods.forEach((method) =>
        this[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {
            // const request = superagent[method](formatUrl(path));
            const request = fetch(path,{
                method: method,
            })
              return request;
            
            // .then((res) => {
            //     reject(res)
            //     // return res.json();
            // })
            // .catch(error => {
            //     console.log(error)
            //     resolve(error)
            //     // return error
            // })
          
        }));*/
};

exports.default = isomorphicFetch;