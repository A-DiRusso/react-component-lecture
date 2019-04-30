import React from 'react';
import './App.css';
import Widget from './Widget';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowWidget: false
    }
  }
  render() {
    console.log('App: render')
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={this._toggleShowWidget}>flip it</button>
        {this.state.shouldShowWidget ? <Widget /> : null}
     
        </header>
      </div>
    );
  }
  _toggleShowWidget = () => {
    this.setState({
      shouldShowWidget: !this.state.shouldShowWidget
    })
  }
}


export default App;
