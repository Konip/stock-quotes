import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import { useEffect, useState } from 'react';
import apple from "./APPL.json"
import { startThunk } from './store/stock-reducer';
import { connect } from 'react-redux';

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
    // startThunk()
  }

  render() {
    return (
      <div className="App">
        <div className="App-wrap">
          <Card title={"Акции"} type={STOCK} />
          <Card title={"Валюты"} type={FOREX} />
          <Card title={"Криптовалюты"} type={CRYPTO} />
        </div>
      </div>
    );
  }
}

export default connect(null, startThunk)(App);