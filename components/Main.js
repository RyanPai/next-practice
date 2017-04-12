import React , {Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { connect } from 'react-redux';
class Main extends Component {
    
    render() {
       
        const { title, children } = this.props;
     
        return (
   
            <div>
                <Head>
                    <title>{ 'title' }</title>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                </Head>
                <header>
                    <nav>
                        <Link href='/'><a>Wel</a></Link> |
                        <Link href='/about'><a>About</a></Link> |
                        <Link href='/home'><a>Home</a></Link>
                    </nav>
                </header>
                <main>   
                    { children }
                </main>    
                <footer>
                I`m here to stay
                </footer>
            </div>
    
        )
    }
}


export default connect(state=> {
    return {
        about: state.about
    }
})(Main);