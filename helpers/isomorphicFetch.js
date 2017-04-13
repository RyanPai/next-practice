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
         
        this[method] = async (path, { params, data } = {}) => {
            let request,res;
            // const request = fetch[method](formatUrl(path)); 
           
            try {
                request = await fetch(path,{
                    method: method,
                });

                res = await request.json()
            } 
            catch(e) {
                console.log(e);
            }
           
            return res;
           
           
        });

      
        
    }
}