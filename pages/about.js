import React , {Component } from 'react';
import { initStore } from '../redux/create';


import withRedux from 'next-redux-wrapper';


import isomorphicFetch from '../helpers/isomorphicFetch.js';
import Main from '../components/Main';
import Counter from '../components/Counter';
import  * as aboutAction from '../redux/modules/about';
// const ajax = new isomorphicFetch();
class About extends Component {
    static async  getInitialProps({ store, isServer, pathname, query }) {
        const { getProduct, addCount} = aboutAction;
        const action = getProduct();

        if (isServer) {
            store.dispatch( action);
               
            return store.dispatch(action).then((r)=>{
                  
                    return {custom: 'custom server',isServer};
            });
         
        }
        store.dispatch( action);
       return {custom: 'custom client',isServer};
        
    }

    componentDidMount() {
       
    }

    render() {
        console.log(this.props.about.product.data.title)
        return(
            <Main>
                <section>
                    <Counter/>
                    <div>
                        <h1>About</h1>
                        {`is from ${(this.props.isServer)? 'Server' : 'Client'}`}
                        <p>{`${this.props.custom}`}</p>
                        <p>{`flag = ${this.props.about.product.flag}`}</p>
                    </div>
                </section>
                
            </Main>
        )
    }
}

 export default withRedux(initStore,(state)=>({about: state.about}))(About)