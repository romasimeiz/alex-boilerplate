import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    isActive: false,
    path: ''
  };

  onPathChange = event => {
      this.setState({ path: event.target.value })
  };

  changeSwitcher = () => this.setState({ isActive: !this.state.isActive });

  render() {
      return (
        <div className="App">
          {/* @TODO: make like className */}
          <div>{this.state.isActive ? 'On' : 'Off'}</div>
          <div style={{ width: 25, height: 25, borderRadius: 20, background: this.state.isActive ? 'green' : 'gray' }}></div>
            <button onClick={this.changeSwitcher}>On / Off </button>
            <img src={this.state.path} alt="" width="100" height="100" />
            <input value={this.state.path} onChange={this.onPathChange} type="text" />
            <MyComp name="Alex">

            </MyComp>
        </div>
    );
  }
}


const MyComp = props => {
    return (
        <>
            <div>{props.name}</div>
            <div>
                {props.children}
            </div>
        </>
    )
}

export default App;
