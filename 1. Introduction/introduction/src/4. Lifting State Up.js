import { Component } from "react"

class Input extends Component {
  render() {
    return (
      <input
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}

class App extends Component {
  state = {
    name: '',
    lastname: '',
  }

  updateValues = (prop, value) => {
    this.setState({ [prop]: value })
  }

  render() {
    return (
      <p>
        Complete name: { `${this.state.name} ${this.state.lastname}` }
        <Input
          value={this.state.name}
          onChange={ev => this.updateValues('name', ev.target.value)}
        />
        <Input
          value={this.state.lastname}
          onChange={ev => this.updateValues('lastname', ev.target.value)}
        />
      </p>
    )
  }
}

export default App