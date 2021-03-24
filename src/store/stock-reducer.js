import { buildChartData } from "./buildChartData"
import { dataAPI, startAPI } from './../API/API';

const ADD_DATA_STOCK = "ADD_DATA_STOCK"
const ADD_DATA_FOREX = "ADD_DATA_FOREX"
const ADD_DATA_CRYPTO = "ADD_DATA_CRYPTO"
const LOAD_DATA = "LOAD_DATA"

const initialState = {
    STOCK: [],
    FOREX: [],
    CRYPTO: [],
}

export const stockReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_DATA_STOCK: {
            return {
                ...state,
                STOCK: payload
            }
        }
        case ADD_DATA_FOREX: {
            return {
                ...state,
                FOREX: payload
            }
        }
        case ADD_DATA_CRYPTO: {
            return {
                ...state,
                CRYPTO: payload
            }
        }

        default:
            return state
    }
}
export const addDataStock = (payload) => ({ type: ADD_DATA_STOCK, payload })
export const addDataForex = (payload) => ({ type: ADD_DATA_FOREX, payload })
export const addDataCrypto = (payload) => ({ type: ADD_DATA_CRYPTO, payload })

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

const DAY = "1D"


const request = {
    STOCK: {
        "1D": "TIME_SERIES_INTRADAY",
        "1W": "TIME_SERIES_DAILY",
        "1M": "TIME_SERIES_DAILY"
    },
    FOREX: {
        "1D": "FX_INTRADAY",
        "1W": "FX_DAILY",
        "1M": "FX_DAILY"
    },
    CRYPTO: {

    },
}
const response = {
    STOCK: {
        "1D": "Time Series (5min)",
        "1W": "Time Series (Daily)",
        "1M": "Time Series (Daily)"
    },
    FOREX: {
        "1D": "Time Series FX (5min)",
        "1W": "Time Series FX (Daily)",
        "1M": "Time Series FX (Daily)"
    },
    CRYPTO: {

    },
}

export function requestThunk(type, time, pair) {
    console.log(type, time, pair)
    return (dispatch) => {
        switch (type) {
            case STOCK: {
                (fetch(`${URL}${request[type][time]}&symbol=${pair}&${time === "1D" ? "interval=5min&" : ""}apikey=${alphaVantageKey}`)
                    .then(res => {
                        return res.json()
                    })
                    .then(res => {
                        console.log(res)
                        // console.log(buildChartData(res[response[type][time]],type))
                        const data = buildChartData(res[response[type][time]], type, time)
                        console.log(data)
                        return dispatch(addDataStock(data))
                    }))
            }
            case FOREX: {
                // https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=demo
                // https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=JPY&to_symbol=GBPinterval=5min&apikey=VZLZ58FTEXZW7QZ6
                (fetch(`${URL}${request[type][time]}&from_symbol=${pair.slice(0, 3)}&to_symbol=${pair.slice(3)}${time === "1D" ? "&interval=5min" : ""}&apikey=${alphaVantageKey}`)
                    .then(res => {
                        return res.json()
                    })
                    .then(res => {
                        console.log(res)
                        // console.log(buildChartData(res[response[type][time]],type))
                        const data = buildChartData(res[response[type][time]], type, time)
                        console.log(data)
                        return dispatch(addDataForex(data))
                    }))
            }
            case CRYPTO: {

            }

            default:
                break;
        }
    }
}


// https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=APPL&interval=5min&apikey=VZLZ58FTEXZW7QZ6
// https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo

// https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=APPL&apikey=VZLZ58FTEXZW7QZ6
// https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=demo

// https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo
// // fetch(`${BASE_URL}${request[type][time]}&symbol=${pair}&interval=5min&apikey=${alphaVantageKey1}`)

// return (type, time, pair, dispatch) => {
//     console.log(type, time, pair, dispatch)

//     fetch(`${BASE_URL}TIME_SERIES_INTRADAY&symbol=${pair}&interval=5min&apikey=${alphaVantageKey1}`)
//         // fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo`)
//         .then(res => {
//             return res.json()
//         })
//         .then(data => {
//             console.log(data["Time Series (5min)"])
//             // return dispatch(addDataStock(data["Time Series (5min)"]))
//         })
// }


export const startThunk = () => {

    return (dispatch) => {

        // ------------------STOCK-------------------------

        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${APPLE}&apikey=${alphaVantageKey1}`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                const data = buildChartData(res["Time Series (Daily)"], STOCK, DAY)
                // console.log(data)
                return dispatch(addDataStock(data))
            })

        // ------------------FOREX-------------------------

        fetch(`https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${USD}&to_symbol=${EUR}&apikey=${alphaVantageKey1}`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                const data = buildChartData(res["Time Series FX (Daily)"], FOREX, DAY)
                // console.log(data)
                return dispatch(addDataForex(data))
            })

        // ------------------CRYPTO-------------------------

        fetch(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${BTC}&market=${USD}&apikey=${alphaVantageKey1}`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                // console.log(buildChartData(data["Time Series (Digital Currency Daily)"], CRYPTO))
                const data = buildChartData(res["Time Series (Digital Currency Daily)"], CRYPTO, DAY)
                return dispatch(addDataCrypto(data))
            })
    }
}
