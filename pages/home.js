import React , {Component } from 'react';
import Main from '../components/Main.js';
import Counter from '../components/Counter';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux/create';
import { connect } from 'react-redux';
class Home extends Component {
    render() {
        return (
            <Main>

              
                <section>
                      <Counter/>
                    <h1>Home</h1>
                </section>
            </Main>
       
        );
    }
}

export default withRedux(initStore)(Home);