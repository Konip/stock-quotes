import React from 'react';
import './App.css';
import { startThunk } from './store/stock-reducer';
import { connect } from 'react-redux';
import Markets from './components/Markets/Markets';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import BigChart from './components/BigChart/BigChart';


class App extends React.Component {

  componentDidUpdate() {
    this.props.startThunk()
  }

  render() {
    return (
      <div className="App">

        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/markets" render={() => <Markets />} />
        {/* <Route exact path="/markets/:pair" component={BigChart} /> */}
        <Route exact path="/markets/:pair" render={() => <BigChart />} />
      </div>
    );
  }
}

export default connect(null, startThunk)(App);
