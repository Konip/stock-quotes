import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import { startThunk } from './store/stock-reducer';
import { connect } from 'react-redux';
import CardContainer from './components/Card/CardContainer';

const STOCK = "STOCK"
const FOREX = "FOREX"
const CRYPTO = "CRYPTO"

class App extends React.Component {

  componentDidUpdate() {
    this.props.startThunk()
  }

  render() {
    return (
      <div className="App">
        <div className="App-wrap">
          <CardContainer title={"Акции"} type={STOCK} />
          <CardContainer title={"Валюты"} type={FOREX} />
          <CardContainer title={"Криптовалюты"} type={CRYPTO} />
        </div>
      </div>
    );
  }
}

export default connect(null, startThunk)(App);
