import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { setName } from './reducer';

class App extends Component {
  constructor(props) {
    console.log(props)
    super(props);
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Sandbox</h2>
        </div>
        <div>
          <input
            type="text"
            value={this.props.name}
            onChange={(event) => {
              this.props.setName(event.target.value);
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: () => {
      dispatch(setName())
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

export default AppContainer;
