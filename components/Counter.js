import React from 'react'
import { connect } from 'react-redux';
import  * as aboutAction from '../redux/modules/about';

class Counter extends React.Component {
   
    state = {
        count: 0
    }
  add () {
    
    const { about, addCount} = this.props;
    let count = about.counter.count + 1;
    addCount(count);
  }
  componentDidMount() {
    // const {getProduct} = this.props;
    // getProduct()
  }
  render () {
    const { about,getProduct } = this.props;
   
    return (
      <div>
        <p>Count is: {about.counter.count}</p>
        <button onClick={() => this.add()}>Add</button>
      </div>
    )
  }
}

export default connect((state)=>{
  return {
    about: state.about
  }
},aboutAction)(Counter)