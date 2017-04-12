export default   function apiMiddleware(fetch) { 
    
	return ({dispatch, getState}) =>{
		return next => action => {
			
			const { promise, types, ...rest } = action; 

	      	if (!promise) {
		        return next(action);
	      	}

	      	const [REQUEST, SUCCESS, FAILURE] = types;
      		next({...rest, type: REQUEST});
			 
      		const actionPromise = promise(fetch);
           
            actionPromise
            .then(
                (result) => {
                	next({...rest, result, type: SUCCESS })
                },
                (error) => {
              
                    next({...rest, error, type: FAILURE })
                }
            )
            
            .catch((error) => {
                console.error('MIDDLEWARE ERROR:', error);
                if (process.env.NODE_ENV !== 'production') {
                    console.log(FAILURE)
                }
                next({...rest, error, type: FAILURE });
            }).then();
			
            return actionPromise;
		
		};

	};	

}




