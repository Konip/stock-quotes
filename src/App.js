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
import Search from './components/Search/Search';
import SearchContainer from './components/Search/SearchContainer';


class App extends React.Component {

  // componentDidUpdate() {
  //   this.props.startThunk()
  // }

  render() {
    return (
      <div className={this.props.colorTheme ? `App` : `App dark`}>
        <Navbar className="nav" colorTheme={this.props.colorTheme} />
        <SearchContainer className="search"/>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/markets" render={() => <BigCardContainer />} />
        <Footer />
        {/* <Route path="*" component={Error} /> */}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    colorTheme: state.stock.colorTheme
  }
}

export default connect(mapStateToProps, null)(App);
