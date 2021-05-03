import { buildChartData } from "./buildChartData"
import { dataAPI, startAPI } from './../API/API';
import { initialReducer } from '../db/initial'
import { description } from '../db/description'
import { db } from '../db/db'

const ADD_DATA_STOCK = "ADD_DATA_STOCK"
const ADD_DATA_FOREX = "ADD_DATA_FOREX"
const ADD_DATA_CRYPTO = "ADD_DATA_CRYPTO"
const ACTIVE = "ACTIVE"
const ACTIVE_TYPE = "ACTIVE_TYPE"
const COLOR_THEME = "COLOR_THEME"
const CHART = "CHART"
const DESCRIPTION = "DESCRIPTION"
const CURRENCY = "CURRENCY"
const TIME_FRAMES = "TIME_FRAMES"
const PAIR = "PAIR"
const CHART_TIMER = "CHART_TIMER"
const SHOW_LOADER = "SHOW_LOADER"
const HIDE_LOADER = "HIDE_LOADER"
const ERROR = "ERROR"

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
    CHART: [],
    active_type: 'STOCK',
    chartTime: '1W',
    pair: '',
    colorTheme: true,
    description: '',
    currency: '',
    timeFrames: '',
    loading: false,
    error: false
}

export const stockReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CHART: {
            return { ...state, CHART: payload }
        }
        case ADD_DATA_STOCK: {
            return { ...state, STOCK: payload }
        }
        case ADD_DATA_FOREX: {
            return { ...state, FOREX: payload }
        }
        case ADD_DATA_CRYPTO: {
            return { ...state, CRYPTO: payload }
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
            return { ...state, active_type: payload }
        }
        case COLOR_THEME: {
            return { ...state, colorTheme: !state.colorTheme }
        }
        case DESCRIPTION: {
            return { ...state, description: payload }
        }
        case CURRENCY: {
            return { ...state, currency: payload }
        }
        case TIME_FRAMES: {
            return { ...state, timeFrames: payload }
        }
        case PAIR: {
            return { ...state, pair: payload }
        }
        case CHART_TIMER: {
            return { ...state, chartTime: payload }
        }
        case SHOW_LOADER: {
            return { ...state, loading: true }
        }
        case HIDE_LOADER: {
            return { ...state, loading: false }
        }
        case ERROR: {
            return { ...state, error: payload }
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
export const addChart = (payload) => ({ type: CHART, payload })
export const addDescription = (payload) => ({ type: DESCRIPTION, payload })
export const addCurrency = (payload) => ({ type: CURRENCY, payload })
export const addTimeFrames = (payload) => ({ type: TIME_FRAMES, payload })
export const addPair = (payload) => ({ type: PAIR, payload })
export const addChartTimer = (payload) => ({ type: CHART_TIMER, payload })
export const showLoader = () => ({ type: SHOW_LOADER })
export const hideLoader = () => ({ type: HIDE_LOADER })
export const error = (payload) => ({ type: ERROR, payload })

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
        "1W": "TIME_SERIES_DAILY_ADJUSTED",
        "1M": "TIME_SERIES_DAILY_ADJUSTED",
        "6M": "TIME_SERIES_WEEKLY_ADJUSTED",
        "1Y": "TIME_SERIES_WEEKLY_ADJUSTED",
        "All": "TIME_SERIES_MONTHLY_ADJUSTED",
    },
    FOREX: {
        "1D": "FX_INTRADAY",
        "1W": "FX_DAILY",
        "1M": "FX_DAILY",
        "6M": "FX_WEEKLY",
        "1Y": "FX_WEEKLY",
        "All": "FX_MONTHLY",
    },
    CRYPTO: {
        "1W": "DIGITAL_CURRENCY_DAILY",
        "1M": "DIGITAL_CURRENCY_DAILY",
        "6M": "DIGITAL_CURRENCY_WEEKLY",
        "1Y": "DIGITAL_CURRENCY_WEEKLY",
        "All": "DIGITAL_CURRENCY_MONTHLY",
    },
}
const response = {
    STOCK: {
        "1D": "Time Series (5min)",
        "1W": "Time Series (Daily)",
        "1M": "Time Series (Daily)",
        "6M": "Weekly Adjusted Time Series",
        "1Y": "Weekly Adjusted Time Series",
        "All": "Monthly Adjusted Time Series",
    },
    FOREX: {
        "1D": "Time Series FX (5min)",
        "1W": "Time Series FX (Daily)",
        "1M": "Time Series FX (Daily)",
        "6M": "Time Series FX (Weekly)",
        "1Y": "Time Series FX (Weekly)",
        "All": "Time Series FX (Monthly)",
    },
    CRYPTO: {
        "1W": "Time Series (Digital Currency Daily)",
        "1M": "Time Series (Digital Currency Daily)",
        "6M": "Time Series (Digital Currency Weekly)",
        "1Y": "Time Series (Digital Currency Weekly)",
        "All": "Time Series (Digital Currency Monthly)",
    },
}

export function requestThunk(type, time, pair, frame) {
    // console.log(type, time, pair, frame)

    let dbPair
    for (let i = 0; db.length > i; i++) {
        if (db[i].pair === pair) {
            dbPair = db[i].time
        }
    }

    return (dispatch) => {
        switch (type) {
            case STOCK: {
                dispatch(showLoader())
                fetch(`${URL}${request[type][time]}&symbol=${pair}&${time === "1D" ? "interval=5min&" : ""}apikey=${alphaVantageKey}`)
                    .then(res => res.json())
                    .then(res => {
                        if (res['Error Message'] || res['Note']) return Promise.reject()

                        const data = buildChartData(res[response[type][time]], type, time)

                        if (initialReducer[type][pair] === pair) {
                            console.log('1')
                            return Promise.all([
                                dispatch(addChartTimer(time)),
                                dispatch(addPair(pair)),
                                dispatch(addTimeFrames(dbPair)),
                                dispatch(addActiveType(type)),
                                dispatch(addChart(data)),
                                dispatch(addDataStock(data)),
                                dispatch(addDescription(description[type][pair])),
                                dispatch(hideLoader())
                            ])
                        }
                        else {
                            console.log('2')
                            return Promise.all([
                                dispatch(addChartTimer(time)),
                                dispatch(addPair(pair)),
                                dispatch(addTimeFrames(dbPair)),
                                dispatch(addActiveType(type)),
                                dispatch(addChart(data)),
                                dispatch(addDescription(description[type][pair])),
                                dispatch(hideLoader())
                            ])
                        }
                    })
                    .catch(() => {
                        dispatch(error(true))
                        setTimeout(() => {
                            dispatch(error(false))
                        }, 6000)
                    })
                break
            }
            case FOREX: {
                dispatch(showLoader())
                fetch(`${URL}${request[type][time]}&from_symbol=${pair.slice(0, 3)}&to_symbol=${pair.slice(3)}${time === "1D" ? "&interval=5min" : ""}&apikey=${alphaVantageKey}`)
                    .then(res => res.json())
                    .then(res => {
                        if (res['Error Message'] || res['Note']) return Promise.reject()
                        // console.log(res)
                        const data = buildChartData(res[response[type][time]], type, time)
                        // return dispatch(addDataForex(data))
                        const endStr = pair.slice(3)
                        const startStr = pair.slice(0, 3)
                        return Promise.all([
                            dispatch(addChartTimer(time)),
                            dispatch(addPair(pair)),
                            dispatch(addTimeFrames(dbPair)),
                            dispatch(addActiveType(type)),
                            dispatch(addChart(data)),
                            dispatch(addDataForex(data)),
                            dispatch(addDescription(description[type][startStr])),
                            dispatch(addCurrency(description[type][endStr])),
                            dispatch(hideLoader())
                        ])
                    })
                    .catch(() => {
                        dispatch(error(true))
                        setTimeout(() => {
                            dispatch(error(false))
                        }, 6000)
                    })
                break
            }
            case CRYPTO: {
                dispatch(showLoader())
                if (time === DAY) {
                    fetch(`https://rest.coinapi.io/v1/ohlcv/BITFINEX_SPOT_${pair.slice(0, 3)}_${pair.slice(3)}/latest?period_id=5MIN`, headers)
                        .then(res => res.json())
                        .then(res => {
                            if (res['Error Message'] || res['Note']) return Promise.reject()
                            // console.log(res)
                            const data = buildChartData(res, type, time, pair)
                            // return dispatch(addDataCrypto(data)) && dispatch(addDescription(description[type][pair]))
                            const endStr = pair.slice(3)
                            const startStr = pair.slice(0, 3)

                            return Promise.all([
                                dispatch(addChartTimer(time)),
                                dispatch(addPair(pair)),
                                dispatch(addTimeFrames(dbPair)),
                                dispatch(addActiveType(type)),
                                dispatch(addCurrency(description[FOREX][endStr])),
                                dispatch(addChart(data)),
                                dispatch(addDataCrypto(data)),
                                dispatch(addDescription(description[type][startStr])),
                                dispatch(hideLoader())
                            ])
                        })
                    break
                }
                else {
                    fetch(`${URL}${request[type][time]}&symbol=${pair.slice(0, 3)}&market=${pair.slice(3)}&apikey=${alphaVantageKey}`)
                        .then(res => res.json())
                        .then(res => {
                            if (res['Error Message'] || res['Note']) return Promise.reject()
                            // console.log(res)
                            const data = buildChartData(res[response[type][time]], type, time, pair)
                            // return dispatch(addDataCrypto(data)) && dispatch(addDescription(description[type][pair]))
                            const endStr = pair.slice(3)
                            const startStr = pair.slice(0, 3)

                            return Promise.all([
                                dispatch(addChartTimer(time)),
                                dispatch(addPair(pair)),
                                dispatch(addTimeFrames(dbPair)),
                                dispatch(addActiveType(type)),
                                dispatch(addCurrency(description[FOREX][endStr])),
                                dispatch(addChart(data)),
                                dispatch(addDataCrypto(data)),
                                dispatch(addDescription(description[type][startStr])),
                                dispatch(hideLoader())
                            ])
                        })
                        .catch(() => {
                            dispatch(error(true))
                            setTimeout(() => {
                                dispatch(error(false))
                            }, 6000)
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
        //     .then(res => res.json())
        //     .then(res => {
        //         const data = buildChartData(res["Time Series (5min)"], STOCK, DAY)
        //         // console.log(data)
        //         return dispatch(addDataStock(data))
        //     })

        // // ------------------FOREX-------------------------

        // fetch(`https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=${USD}&to_symbol=${EUR}&interval=5min&apikey=${alphaVantageKey1}`)
        //     .then(res => res.json())
        //     .then(res => {
        //         const data = buildChartData(res["Time Series FX (5min)"], FOREX, DAY)
        //         // console.log(data)
        //         return dispatch(addDataForex(data))
        //     })

        // // ------------------CRYPTO-------------------------

        // fetch('https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/latest?period_id=5MIN', headers)
        //     .then(res => res.json())
        //     .then(res => {
        //         const data = buildChartData(res, CRYPTO, DAY)
        //         dispatch(addDataCrypto(data))
        //     })
    }
}
