import { connect, useDispatch, useSelector } from "react-redux";
import { requestThunk } from "../../store/stock-reducer";
import Search from "./Search";

// const mapStateToProps = (state) => {
//     return {
//         colorTheme: state.stock.colorTheme,
//         chartTime: state.stock.chartTime
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         request: (type, time, pair,chart) => {
//             dispatch(requestThunk(type, time, pair,chart))
//         }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Search)


import React from 'react'

export default function SearchContainer() {
    const dispatch = useDispatch()
    const {colorTheme,chartTime} = useSelector(({ stock }) => stock)
    const color = colorTheme
    const chart = chartTime

    const request = (type, time, pair, small) => {
        dispatch(requestThunk(type, time, pair, small))
    }

    return (
        <div>
            <Search colorTheme={color} chartTime={chart} request={request} />
        </div>
    )
}
