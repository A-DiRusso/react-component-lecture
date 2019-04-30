import React, { Component } from 'react'

export default class Widget extends Component {
  constructor(props) {
      super(props);
      this.state =  {

      }
  }
  componentDidMount() {
      console.log('Widget: componentDidMount')
  }

  componentWillUnmount() {
      console.log('Widget: ComponentWillUnmount')
  }
  render() {
      console.log('Widget: render')
    return (
      <div>
        Hello!
      </div>
    )
  }
}
