import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { requestThunk, stockReducer } from './stock-reducer';

// const arr = (store) => (next) => (action) => {
//     console.log("hello")
//     return next(action)
// }

let reducers = combineReducers(
    {
        stock: stockReducer,
            }
)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))


window.store = store;
export default store;