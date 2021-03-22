
const request = {
    STOCK: {
        "1D": "TIME_SERIES_INTRADAY",
        "1W": "TIME_SERIES_WEEKLY",
        "1M": "TIME_SERIES_MONTHLY"
    },
    FOREX: {

    },
    CRYPTO: {

    },
}
const response = {
    STOCK: {
        "1D": "Time Series (5min)",
        "1W": "Weekly Time Series",
        "1M": "Monthly Time Series"
    },
    FOREX: {

    },
    CRYPTO: {

    },
}
const STOCK = "STOCK"
const FOREX = "FOREX"
const CRYPTO = "CRYPTO"
const alphaVantageKey = "LQUDEAVINLE7N2RC"
const alphaVantageKey1 = 'VZLZ58FTEXZW7QZ6'
const APPLE = "AAPL"
const EUR = "EUR"
const USD = "USD"
const BTC = "BTC"
const URL = "https://www.alphavantage.co/query?function="

export const dataAPI = (type, time, pair) => {
      return  console.log(type, time, pair)

    // (fetch(`${URL}${request[type][time]}&symbol=${pair}&${time === "1D" ? "interval=5min&" : ""}apikey=${alphaVantageKey}`)
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then(data => {
    //         // console.log(data)
    //         console.log(data[response[type][time]])
    //         return data[response[type][time]]
    //     }))
}