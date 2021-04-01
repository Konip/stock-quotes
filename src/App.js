import React from 'react';
import './App.css';
import { startThunk } from './store/stock-reducer';
import { connect } from 'react-redux';
import Markets from './components/Markets/Markets';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import BigCard from './components/BigCard/BigCard';
import BigCardContainer from './components/BigCard/BigCardContainer';


class App extends React.Component {

  componentDidUpdate() {
    this.props.startThunk()
  }

  render() {
    return (
      <div className="App">

        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/markets" render={() => <Markets />} />
        <Route exact path="/markets/:pair" render={() => <BigCardContainer />} />
      </div>
    );
  }
}

export default connect(null, startThunk)(App);
