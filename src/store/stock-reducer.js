import { buildChartData } from "./buildChartData"
import { dataAPI, startAPI } from './../API/API';

const ADD_DATA_STOCK = "ADD_DATA_STOCK"
const ADD_DATA_FOREX = "ADD_DATA_FOREX"
const ADD_DATA_CRYPTO = "ADD_DATA_CRYPTO"
const ACTIVE = "ACTIVE"
const ACTIVE_TYPE = "ACTIVE_TYPE"
const COLOR_THEME = "COLOR_THEME"

const initialState = {
    STOCK: [],
    FOREX: [],
    CRYPTO: [],
    ACTIVE: {
        STOCK: {
            time: "1D",
            pair: "AAPL"
        },
        FOREX: {
            time: "1D",
            pair: "USDEUR"
        },
        CRYPTO: {
            time: "1D",
            pair: "BTCUSD"
        }
    },
    active_type: "",
    colorTheme: true
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
        case ACTIVE: {
            return {
                ...state,
                ACTIVE: {
                    ...state.ACTIVE,
                    [payload.type]: {
                        time: payload.time,
                        pair: payload.pair
                    }
                }
            }
        }
        case ACTIVE_TYPE: {
            return {
                ...state,
                active_type: payload
            }
        }
        case COLOR_THEME: {
            return {
                ...state,
                colorTheme: !state.colorTheme
            }
        }

        default:
            return state
    }
}
export const addDataStock = (payload) => ({ type: ADD_DATA_STOCK, payload })
export const addDataForex = (payload) => ({ type: ADD_DATA_FOREX, payload })
export const addDataCrypto = (payload) => ({ type: ADD_DATA_CRYPTO, payload })
export const addActive = (payload) => ({ type: ACTIVE, payload })
export const addActiveType = (payload) => ({ type: ACTIVE_TYPE, payload })
export const addColorTheme = (payload) => ({ type: COLOR_THEME, payload })

const STOCK = "STOCK"
const FOREX = "FOREX"
const CRYPTO = "CRYPTO"
const alphaVantageKey = "LQUDEAVINLE7N2RC"
const alphaVantageKey1 = 'VZLZ58FTEXZW7QZ6'
const alphaVantageKey2 = '9A3WH6UYZEPJ88QM'
const coinAPI = "2AA5C267-67AE-4017-AF88-F84E88DC327C"

const APPLE = "AAPL"
const EUR = "EUR"
const USD = "USD"
const BTC = "BTC"
const URL = "https://www.alphavantage.co/query?function="

const DAY = "1D"

const headers = {
    headers: {
        'Content-Type': 'application/json',
        "X-CoinAPI-Key": "2AA5C267-67AE-4017-AF88-F84E88DC327C"
    }
}

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
        "1W": "DIGITAL_CURRENCY_DAILY",
        "1M": "DIGITAL_CURRENCY_DAILY"
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
        "1W": "Time Series (Digital Currency Daily)",
        "1M": "Time Series (Digital Currency Daily)"
    },
}

export function requestThunk(type, time, pair) {
    // console.log(type, time, pair)
    return (dispatch) => {
        switch (type) {
            case STOCK: {
                fetch(`${URL}${request[type][time]}&symbol=${pair}&${time === "1D" ? "interval=5min&" : ""}apikey=${alphaVantageKey}`)
                    .then(res => {
                        return res.json()
                    })
                    .then(res => {
                        // console.log(res)
                        const data = buildChartData(res[response[type][time]], type, time)
                        return dispatch(addDataStock(data))
                    })
                break
            }
            case FOREX: {
                // https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=demo
                // https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=JPY&to_symbol=GBPinterval=5min&apikey=VZLZ58FTEXZW7QZ6
                fetch(`${URL}${request[type][time]}&from_symbol=${pair.slice(0, 3)}&to_symbol=${pair.slice(3)}${time === "1D" ? "&interval=5min" : ""}&apikey=${alphaVantageKey}`)
                    .then(res => {
                        return res.json()
                    })
                    .then(res => {
                        // console.log(res)
                        const data = buildChartData(res[response[type][time]], type, time)
                        return dispatch(addDataForex(data))
                    })
                break
            }
            case CRYPTO: {
                if (time == DAY) {
                    fetch(`https://rest.coinapi.io/v1/ohlcv/BITFINEX_SPOT_${pair.slice(0, 3)}_${pair.slice(3)}/latest?period_id=5MIN`, headers)
                        .then(res => {
                            return res.json()
                        })
                        .then(res => {
                            // console.log(res)
                            const data = buildChartData(res, type, time)
                            return dispatch(addDataCrypto(data))
                        })
                    break
                }
                else {
                    fetch(`${URL}${request[type][time]}&symbol=${pair.slice(0, 3)}&market=${pair.slice(3)}&apikey=${alphaVantageKey}`)
                        .then(res => {
                            return res.json()
                        })
                        .then(res => {
                            // console.log(res)
                            const data = buildChartData(res[response[type][time]], type, time)
                            return dispatch(addDataCrypto(data))
                        })
                    break
                }
            }
            default:
                break;
        }
    }
}

export const startThunk = () => {

    return (dispatch) => {

        // // ------------------STOCK-------------------------

        // fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${APPLE}&interval=5min&apikey=${alphaVantageKey1}`)
        //     .then(res => {
        //         return res.json()
        //     })
        //     .then(res => {
        //         const data = buildChartData(res["Time Series (5min)"], STOCK, DAY)
        //         // console.log(data)
        //         return dispatch(addDataStock(data))
        //     })

        // // ------------------FOREX-------------------------

        // fetch(`https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=${USD}&to_symbol=${EUR}&interval=5min&apikey=${alphaVantageKey1}`)
        //     .then(res => {
        //         return res.json()
        //     })
        //     .then(res => {
        //         const data = buildChartData(res["Time Series FX (5min)"], FOREX, DAY)
        //         // console.log(data)
        //         return dispatch(addDataForex(data))
        //     })

        // // ------------------CRYPTO-------------------------

        // fetch('https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/latest?period_id=5MIN', headers)
        //     .then(res => {
        //         return res.json()
        //     })
        //     .then(res => {
        //         const data = buildChartData(res, CRYPTO, DAY)
        //         dispatch(addDataCrypto(data))
        //     })
    }
}
