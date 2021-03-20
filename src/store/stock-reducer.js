import { buildChartData } from "./buildChartData"


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

export const startThunk = () => {
    return (dispatch) => {

        // ------------------STOCK-------------------------

        fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo")
            .then(res => {
                return res.json()
            })
            .then(res => {
                // console.log(buildChartData(data["Time Series (Daily)"], STOCK))
                const data = buildChartData(res["Time Series (Daily)"], STOCK)
                return dispatch(addDataStock(data))
            })

        // ------------------FOREX-------------------------

        fetch("https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=EUR&to_symbol=USD&apikey=demo")
            .then(res => {
                return res.json()
            })
            .then(res => {
                // console.log(buildChartData(data["Time Series FX (Daily)"], FOREX))
                const data = buildChartData(res["Time Series FX (Daily)"], FOREX)
                return dispatch(addDataForex(data))
            })

        // ------------------CRYPTO-------------------------

        fetch("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=demo")
            .then(res => {
                return res.json()
            })
            .then(res => {
                // console.log(buildChartData(data["Time Series (Digital Currency Daily)"], CRYPTO))
                const data = buildChartData(res["Time Series (Digital Currency Daily)"], CRYPTO)
                return dispatch(addDataCrypto(data))
            })
    }
}
