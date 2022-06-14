import { Component } from "react"

class App extends Component {

  // state is a reserved name
  state = {
    label: 'Hello world!',
    class: 'class-btn'
  }

  render() {
    return (
      <div>
        <b>{this.state.label}</b>
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