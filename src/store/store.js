import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { forexReducer } from './forex-reducer';
import { requestThunk, stockReducer } from './stock-reducer';
import { cryptoReducer } from './crypto-reducer';

// const arr = (store) => (next) => (action) => {
//     console.log("hello")
//     return next(action)
// }

let reducers = combineReducers(
    {
        stock: stockReducer,
        // forex: forexReducer,
        // crypto: cryptoReducer,
    }
)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))


window.store = store;
export default store;