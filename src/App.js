import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import { useEffect, useState } from 'react';
// import db_IBM from "./db_IBM.json"
// import db_CRYPTO from "./db_CRYPTO.json"
// import db_FOREX from "./db_FOREX.json"
import apple from "./APPL.json"
import { startThunk } from './store/stock-reducer';
import { connect } from 'react-redux';


function buildChartData(data, type) {
  // console.log(data)
  const chartData = []

  for (let d in data) {
    let y = ""

    switch (type) {
      case "STOCK":
      case "FOREX": {
        y = "4. close"
        break
      }
      case "CRYPTO": {
        y = "4b. close (USD)"
        break
      }
    }

    let NewDataPoint = {
      x: d,
      y: data[d][y]
    }
    chartData.push(NewDataPoint)
  }
  chartData.reverse()
  // console.log(chartData)
  return chartData
}


const STOCK = "STOCK"
const FOREX = "FOREX"
const CRYPTO = "CRYPTO"

const TESLA = "TSLA"
const APPLE = "APLE"
const INTEL = "INTC"
const SPOT = "SPOT"
const AMZN = "AMZN"
const BASE_URL = "https://www.alphavantage.co"
const alphaVantageKey = "LQUDEAVINLE7N2RC"
const alphaVantageKey1 = 'VZLZ58FTEXZW7QZ6'
const alphaVantageKey2 = '9A3WH6UYZEPJ88QM'
class App extends React.Component {

  componentDidUpdate() {
    startThunk()
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

const mapStateToProps = (state => {

})

export default connect(null, startThunk)(App);


   // const EUR = "EUR"
  // const USD = "USD"
  // const JPY = "JPY"
  // const BYN = "BYN"
  // const GBP = "GBP"
  // const INR = "INR"
  // const ILS = "ILS"

  // const BTC = "BTC"
  // const ETH = "ETH"
  // const LTC = "LTC"
  // const XRP = "XRP"
  // const BASE_URL = "https://www.alphavantage.co"
  // const alphaVantageKey = "LQUDEAVINLE7N2RC"
  // const alphaVantageKey1 = 'VZLZ58FTEXZW7QZ6'
  // const alphaVantageKey2 = '9A3WH6UYZEPJ88QM'

  // // -------------------------------------------DEMO REQUEST-----------------------------

  // // useEffect(function () {

  // //   // ------------------STOCK-------------------------

  // // fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo")
  // //   .then(function (response) {
  // //    return response.json()
  // //   })
  // //   .then(data => {
  // //     console.log(data)
  // //     // setData(data["Time Series (Daily)"])
  // //     let chartData = buildChartData(data["Time Series (Daily)"], "stock")
  // //     setStockData(chartData)
  // //   })

  // // // ------------------STOCK DATA-------------------------

  // //   // ------------------FOREX-------------------------
  // //   // ------------------CHART DATA-------------------------
  // //   fetch("https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=EUR&to_symbol=USD&apikey=demo")
  // //     .then(function (response) {
  // //       return response.json()
  // //     })
  // //     .then(data => {
  // //       // setData(data["Time Series (Daily)"])
  // //       let chartData = buildChartData(data["Time Series FX (Daily)"], "forex")
  // //       setForexData(chartData)
  // //     })

  // //   // ------------------ROW DATA-------------------------
  // //   fetch("https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=demo")
  // //     .then(response => {
  // //       return response.json()
  // //     })
  // //     .then(data => {
  // //       // console.log(data["Realtime Currency Exchange Rate"])
  // //       setForexRow(data["Realtime Currency Exchange Rate"])
  // //     })
  // //   // ------------------CRYPTO-------------------------
  // //   // ------------------CHART DATA-------------------------
  // //   fetch("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=demo")
  // //     .then(function (response) {
  // //       return response.json()
  // //     })
  // //     .then(data => {
  // //       // setData(data["Time Series (Digital Currency Daily)"])
  // //       let chartData = buildChartData(data["Time Series (Digital Currency Daily)"], "crypto")
  // //       setCryptoData(chartData)
  // //     })
  // //   // // ------------------ROW DATA-------------------------
  // //   fetch("https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CNY&apikey=demo")
  // //     .then(response => {
  // //       return response.json()
  // //     })
  // //     .then(data => {
  // //       // console.log(data["Realtime Currency Exchange Rate"])
  // //       setCryptoRow(data["Realtime Currency Exchange Rate"])
  // //     })
  // // }, [])

  // //   // -------------------------------------------REQUEST-------------------------

  // //   // ------------------STOCK-------------------------

  // // useEffect(function () {

  // //   fetch(`${BASE_URL}/query?function=TIME_SERIES_DAILY&symbol=${AMZN}&outputsize=compact&apikey=${alphaVantageKey}`)
  // //     .then(function (response) {
  // //       return response.json()
  // //     })
  // //     .then(data => {

  // //       setData(data)
  // //       let chartData = buildChartData(data["Time Series (Daily)"], STOCK)
  // //       setStockData(chartData)
  // //     })
  // // }, [])


 