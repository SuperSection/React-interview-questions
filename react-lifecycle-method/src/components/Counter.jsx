import { Component } from 'react'


export default class Counter extends Component {

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
    
    if (prevProps.number !== this.props.number) {
      console.log("Counter componentDidUpdate");
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.number}</h2>
      </div>
    );
  }
}
