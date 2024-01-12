import React, { Component } from 'react'

class Counter extends Component {

    // initialize state in the constructor (snippet: 'rconst')
    constructor(props) {
      super(props)

      // state object should have a property named `count` with an initial value of `0`.
      this.state = {
         count: 0
      }
    }

   increment() {

    //NEVER modify the state directly without using 'setState'
    // this.setState({
    //     count: this.state.count + 1
    // }, () => { console.log('Callback value', this.state.count)})

    this.setState(prevState => ({
        count: prevState.count + 1
    }), () => { console.log('Callback value', this.state.count)})
   }

   incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
   }

  render() {

    // bind state value with curly braces
    // add button to increment count value
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter