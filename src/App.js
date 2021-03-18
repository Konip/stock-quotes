import './App.css';
import Card from './Card/Card';
import { useEffect, useState } from 'react';
// import db_IBM from "./db_IBM.json"
// import db_CRYPTO from "./db_CRYPTO.json"
// import db_FOREX from "./db_FOREX.json"
import apple from "./APPL.json"

function buildChartData(data, type) {
  // console.log(data)
  const chartData = []

  for (let d in data) {
    let y = ""

    switch (type) {
      case "stock":
      case "forex": {
        y = "4. close"
        break
      }
      case "crypto": {
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
  console.log(chartData)
  return chartData
}

function App() {

  const [data, setData] = useState({})
  const [stockData, setStockData] = useState({})
  const [forexData, setForexData] = useState({})
  const [cryptoData, setCryptoData] = useState({})

  const [stockRow, setStockRow] = useState({})
  const [forexRow, setForexRow] = useState({})
  const [cryptoRow, setCryptoRow] = useState({})

  const STOCK = "stock"
  const FOREX = "forex"
  const CRYPTO = "crypto"

  const TESLA = "TSLA"
  const APPLE = "APLE"
  const INTEL = "INTC"
  const FORD = "FORD"
  const ZOM = "ZOM"
  const BASE_URL = "https://www.alphavantage.co"
  const alphaVantageKey = "LQUDEAVINLE7N2RC"
  const alphaVantageKey1 = 'VZLZ58FTEXZW7QZ6'
  const alphaVantageKey2 = '9A3WH6UYZEPJ88QM'
  const arr = ["TSLA", "APLE", "INTC", "FORD", "ZOM"]
  let arrData = []
  // -------------------------------------------DEMO REQUEST-----------------------------

  useEffect(function () {

    //   // ------------------STOCK-------------------------

    // fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo")
    //   .then(function (response) {
    //    return response.json()
    //   })
    //   .then(data => {
    //     console.log(data)
    //     // setData(data["Time Series (Daily)"])
    //     let chartData = buildChartData(data["Time Series (Daily)"], "stock")
    //     setStockData(chartData)
    //   })

    // // ------------------STOCK DATA-------------------------
    arr.map(a => {
      fetch(`${BASE_URL}/query?function=GLOBAL_QUOTE&symbol=${a}&apikey=${alphaVantageKey2}`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          arrData.push(data["Global Quote"])
          // console.log(data["Global Quote"])
        })
    })

    // setStockRow(arrData)
    console.log(arrData)



    //   // ------------------FOREX-------------------------
    //   // ------------------CHART DATA-------------------------
    //   fetch("https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=EUR&to_symbol=USD&apikey=demo")
    //     .then(function (response) {
    //       return response.json()
    //     })
    //     .then(data => {
    //       // setData(data["Time Series (Daily)"])
    //       let chartData = buildChartData(data["Time Series FX (Daily)"], "forex")
    //       setForexData(chartData)
    //     })

    //   // ------------------ROW DATA-------------------------
    //   fetch("https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=demo")
    //     .then(response => {
    //       return response.json()
    //     })
    //     .then(data => {
    //       // console.log(data["Realtime Currency Exchange Rate"])
    //       setForexRow(data["Realtime Currency Exchange Rate"])
    //     })
    //   // ------------------CRYPTO-------------------------
    //   // ------------------CHART DATA-------------------------
    //   fetch("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=demo")
    //     .then(function (response) {
    //       return response.json()
    //     })
    //     .then(data => {
    //       // setData(data["Time Series (Digital Currency Daily)"])
    //       let chartData = buildChartData(data["Time Series (Digital Currency Daily)"], "crypto")
    //       setCryptoData(chartData)
    //     })
    //   // // ------------------ROW DATA-------------------------
    //   fetch("https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CNY&apikey=demo")
    //     .then(response => {
    //       return response.json()
    //     })
    //     .then(data => {
    //       // console.log(data["Realtime Currency Exchange Rate"])
    //       setCryptoRow(data["Realtime Currency Exchange Rate"])
    //     })
  }, [])

  //   // -------------------------------------------REQUEST-------------------------

  // useEffect(function () {
  //   // fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=AAPL&apikey=${alphaVantageKey}`)
  //   // https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSCO.LON&outputsize=full&apikey=demo
  //   // fetch(`${BASE_URL}/query?function=TIME_SERIES_DAILY&symbol=${TESLA}&outputsize=compact&apikey=${alphaVantageKey}`)
  //     .then(function (response) {
  //       return response.json()
  //     })
  //     .then(data => {
  //       console.log(data)
  //       setData(data)
  //       let chartData = buildChartData(data["Time Series (Daily)"], STOCK)
  //       setStockData(chartData)
  //     })
  // }, [])


  return (
    <div className="App">
      <div className="App-wrap">
        <Card data={stockData.length ? stockData : apple} title={"Акции"} />
        {/* <Card data={forexData} title={"Валюты"} row={forexRow} />
        <Card data={cryptoData} title={"Криптовалюты"} row={cryptoRow} /> */}
      </div>
    </div>
  );
}

export default App;
