import React, { Component } from 'react'

export default class Widget extends Component {
  constructor(props) {
      super(props);
      this.state =  {
        aNumber: props.startingValue
      }
  }
  componentDidMount() {
      console.log('Widget: componentDidMount')
      this.interval = setInterval(() => {
          this.setState({
              aNumber: this.state.aNumber + 1
          })
      }, 1000)
  }

  componentWillUnmount() {
      console.log('Widget: ComponentWillUnmount')
      clearInterval(this.interval);
      this.props.saveState(this.state.aNumber);
  }
  render() {
      console.log('Widget: render')
    return (
      <div>
        Hello! {this.state.aNumber}
      </div>
    )
  }
}
