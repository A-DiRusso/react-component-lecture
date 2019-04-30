import React from 'react';
import './App.css';
import Widget from './Widget';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowWidget: false,
      widgetState: 0
    }
  }
  render() {
    console.log('App: render')
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={this._toggleShowWidget}>flip it</button>
        {this.state.shouldShowWidget ? <Widget saveState={this._saveWidgetState} startingValue={this.state.widgetState}/> : null}
     
        </header>
      </div>
    );
  }
  _toggleShowWidget = () => {
    this.setState({
      shouldShowWidget: !this.state.shouldShowWidget
    })
  }
  _saveWidgetState = (widgetState) => {
    this.setState({
      widgetState 
    }, () => {
      console.log("App: _saveWidgetState")
    })
  }
}


export default App;
