import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import { startThunk } from './store/stock-reducer';
import { connect } from 'react-redux';
import CardContainer from './components/Card/CardContainer';



const STOCK = "STOCK"
const FOREX = "FOREX"
const CRYPTO = "CRYPTO"

const TESLA = "TSLA"
const APPLE = "AAPL"
const INTEL = "INTC"
const SPOT = "SPOT"
const AMZN = "AMZN"

const EUR = "EUR"
const USD = "USD"
const JPY = "JPY"
const BYN = "BYN"
const GBP = "GBP"
const INR = "INR"
const ILS = "ILS"

const BTC = "BTC"
const ETH = "ETH"
const LTC = "LTC"
const XRP = "XRP"

const BASE_URL = "https://www.alphavantage.co"
const alphaVantageKey = "LQUDEAVINLE7N2RC"
const alphaVantageKey1 = 'VZLZ58FTEXZW7QZ6'
const alphaVantageKey2 = '9A3WH6UYZEPJ88QM'

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
          {/* <CardContainer title={"Криптовалюты"} type={CRYPTO} /> */}
        </div>
      </div>
    );
  }
}

export default connect(null, startThunk)(App);
