import { buildChartData } from "./buildChartData"
import { dataAPI } from './../API/API';


const ADD_DATA_STOCK = "ADD_DATA_STOCK"
const ADD_DATA_FOREX = "ADD_DATA_FOREX"
const ADD_DATA_CRYPTO = "ADD_DATA_CRYPTO"

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


export const requestThunk = (type, time, pair) => {
    
    return (dispatch) => {
        debugger
        let data = buildChartData(dataAPI(type, time, pair))
        return dispatch(addDataStock(data))
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

    // return (dispatch) => {
    //     // ------------------STOCK-------------------------

    //     // fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo")
    //     fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${APPLE}&apikey=${alphaVantageKey}`)
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(res => {
    //             // console.log(buildChartData(data["Time Series (Daily)"], STOCK))
    //             const data = buildChartData(res["Time Series (Daily)"], STOCK)
    //             return dispatch(addDataStock(data))
    //         })

    //     // ------------------FOREX-------------------------

    //     fetch(`https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${USD}&to_symbol=${EUR}&apikey=${alphaVantageKey}`)
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(res => {
    //             // console.log(buildChartData(data["Time Series FX (Daily)"], FOREX))
    //             const data = buildChartData(res["Time Series FX (Daily)"], FOREX)
    //             return dispatch(addDataForex(data))
    //         })

    //     // ------------------CRYPTO-------------------------

    //     fetch(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${BTC}&market=${USD}&apikey=${alphaVantageKey}`)
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(res => {
    //             // console.log(buildChartData(data["Time Series (Digital Currency Daily)"], CRYPTO))
    //             const data = buildChartData(res["Time Series (Digital Currency Daily)"], CRYPTO)
    //             return dispatch(addDataCrypto(data))
    //         })
    // }
}
