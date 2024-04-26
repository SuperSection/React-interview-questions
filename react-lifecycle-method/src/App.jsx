import "./App.css"
import { Component } from 'react'
// import Counter from "./components/Counter";
import FunctionalCounter from "./components/FunctionalCounter";


export default class App extends Component {

  constructor() {
    super();
    // console.log(this);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount: When component render first time!");
  }


  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Super Section</h1>

        {/* <button onClick={this.increment.bind(this)}>Bind method Counting: {this.state.count}</button>
        <span> &nbsp; </span>
        <button onClick={() => this.increment()}>Arrow Function Counting: {this.state.count}</button> */}

        {/* <Counter number={this.state.count} /> */}
        <FunctionalCounter number={this.state.count} />
        <button onClick={() => this.increment()}>Click me</button>
      </div>
    );
  }
}
