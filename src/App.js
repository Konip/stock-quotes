import React from 'react';
import './App.css';
import { startThunk } from './store/stock-reducer';
import { connect } from 'react-redux';
import Home from './components/Home/Home';
import { Route } from 'react-router-dom';
// import Home from './components/Home/Home1';
import BigCardContainer from './components/BigCard/BigCardContainer';
import Error from './components/404/Error';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


class App extends React.Component {

  componentDidUpdate() {
    this.props.startThunk()
  }

  render() {
    return (
      <div className="App">
        <Navbar className="nav"/>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/markets" render={() => <BigCardContainer />} />
        {/* <Route exact path="/markets/:pair" render={() => <BigCardContainer />} /> */}
        <Footer/>
        {/* <Route path="*" component={Error} /> */}
      </div>
    );
  }
}

export default connect(null, startThunk)(App);
