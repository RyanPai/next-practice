const ADD_COUNT = 'ADD_COUNT';
const GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST';
const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
const GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR';

const initialState = {
  counter: {
    count: 0,
  },
  product: {
    loaded: false
  }
  
};

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case ADD_COUNT:
        
        return {
            ...state,
            counter: {
              count: action.count
            }
            
        };
        case GET_PRODUCT_REQUEST: 
          return {
            ...state,
            product: {
              loading: true
            }
          }
          case GET_PRODUCT_SUCCESS: 
            return {
              ...state,
              product: {
                ...action.result,
                loading: false,
                loaded: true
              }
           }
          case GET_PRODUCT_ERROR: 
          return {
            ...state,
            product: {
              ...action.result,
              loading: false,
              loaded: false
            }
          }
         default:
      return state;
    }
}

export function addCount(count) {
  return {
        type: ADD_COUNT,
        count
  };
}

export function getProduct(id) {
  
  return {
      types: [GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_ERROR],
      promise: (fetch) =>  fetch.get('http://servicetest01.pipimy.com.tw/api/v1/product/2979')
  }
}