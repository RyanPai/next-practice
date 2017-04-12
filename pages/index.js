import React , {Component } from 'react';
import Main from '../components/Main';
import Counter from '../components/Counter';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux/create';
class Index extends Component {
    
    render() {
        
        return (
            <Main title='Welcome'>
                
                <section>
                    <Counter/>
                    <h1>Index</h1>
                   
                </section>
                
            </Main>
        )
    }
}

export default withRedux(initStore)(Index);