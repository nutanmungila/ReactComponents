import React, {
  Component
} from 'react';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }
  tick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return(<h1>
        Time : {this.state.counter}
      </h1>)
  }
}
