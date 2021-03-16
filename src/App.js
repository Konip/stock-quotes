import './App.css';
import Card from './Card/Card';
import { useEffect, useState } from 'react';
import db from "./db.json"

function buildChartData(data) {
  // console.log(data)
  // console.log(keys)
  const chartData = []

  for (let d in data) {

    let NewDataPoint = {
      x: d,
      y: data[d]["1. open"]
    }
    chartData.push(NewDataPoint)
  }
  chartData.reverse()
  console.log(chartData) 
  return chartData
}

function App() {

  const [data, setData] = useState({})
  const [chartData, setChartData] = useState({})


  useEffect(function () {
    fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo")
      .then(function (response) {
        return response.json()
      })
      .then(data => {
        // console.log(data["Time Series (Daily)"])
        setData(data["Time Series (Daily)"])
        let chartData = buildChartData(data["Time Series (Daily)"])
        setChartData(chartData)
      })
      // fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo")
      fetch("")
  }, [])
  return (
    <div className="App">
      <div className="App-wrap">
        <Card data={chartData} />
        <Card data={chartData} />
        <Card data={chartData} />
      </div>
    </div>
  );
}

export default App;
