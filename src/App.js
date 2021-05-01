import React from 'react';
import './App.css';
import { startThunk } from './store/stock-reducer';
import { connect } from 'react-redux';
import Home from './components/Home/Home';
import { Route } from 'react-router-dom';
// import Home from './components/Home/Home1';
import BigCardContainer from './components/BigCard/BigCardContainer';
import Error404 from './components/404/Error404';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SearchContainer from './components/Search/SearchContainer';
import StockMarketContainer from './components/StockMarket/StockMarketContainer';
import Error from './components/Error/Error';

class App extends React.Component {

  // componentDidUpdate() {
  //   this.props.startThunk()
  // }

  render() {
    return (
      <div className={this.props.colorTheme ? `App` : `App dark`}>
        <Navbar className="nav" colorTheme={this.props.colorTheme} />
        <SearchContainer className="search" />
        { this.props.error &&
          <Error/>
        }
        
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/markets" render={() => <BigCardContainer />} />
        {/* <Route path="/profile/:userId?" */}
        <Route path="/stock-market/:type" render={() => <StockMarketContainer />} />
        <Footer />
        {/* <Route path="*" component={Error404} /> */}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    colorTheme: state.stock.colorTheme,
    error: state.stock.error
  }
}

export default connect(mapStateToProps, null)(App);
