import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { requestThunk } from "../../store/stock-reducer";
import Search from "./Search";



export default function SearchContainer() {
    const dispatch = useDispatch()
    const { colorTheme, chartTime } = useSelector(({ stock }) => stock)
    const color = colorTheme
    const chart = chartTime

    const request = (type, time, pair) => {
        dispatch(requestThunk(type, time, pair))
    }

    return (
        <Search colorTheme={color} chartTime={chart} request={request} />
    )
}
