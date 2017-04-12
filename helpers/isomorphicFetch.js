import 'isomorphic-fetch';
const methods = ['get', 'post', 'put', 'patch', 'del'];


function formatUrl(path) {

    const adjustedPath = path[0] !== '/' ? '/' + path : path;


    if (process.env.NODE_ENV !== 'production') {
        // console.log('api=' + config.apiHost + adjustedPath)
    }
    
    if(path[0] != 'h') {
        // return config.apiHost + adjustedPath;
    }
    else {
        return path;
    }
    
}

export default class isomorphicFetch {
    constructor(req) {
      
        methods.forEach((method) =>
         
        this[method] = (path, { params, data } = {}) => {
           
            // const request = fetch[method](formatUrl(path)); 
            const request =  fetch(path,{
                method: method,
            })
            .then((res) => {
                return res.json();
            })
            .catch(error => {
                return error
            })
            // console.log(request)
            return request;
           
           
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
      
        
    }
}