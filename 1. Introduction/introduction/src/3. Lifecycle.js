import { Component } from "react"

class Button extends Component {
  state = {}

  constructor(props) {
    super(props)
    console.log('constructor', props)
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount', this.props, this.state)
  }

  render() {
    console.log('render', this.state)
    return (
      <button onClick={() => this.setState({ prop: 1 })}>Send now</button>
    )
  }
}

class App extends Component {

  // state is a reserved name
  state = {
    label: 'Hello world!',
    class: 'class-btn'
  }

  // All component classes
  render() {
    return (
      <div>
        <b>{this.state.label}</b>
        { this.state.label === 'Already here' ? <Button myFirstProp='happy'/> : null }
        <button
          className={this.state.class}
          onClick={() => this.setState({label: 'Already here'})}
        >
          Send
        </button>
      </div>
    )
  }
}

export default App