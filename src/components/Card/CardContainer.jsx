import React from 'react'
import Card from './Card'
import { requestThunk } from "../../store/stock-reducer"
import { useDispatch, useSelector } from 'react-redux';


export default function CardContainer({ type, title }) {
    const dispatch = useDispatch()
    const stock = useSelector(({ stock }) => stock)

    const data = stock[type]
    const activeRow = stock.ACTIVE[type].pair
    const activeTime = stock.ACTIVE[type].time
    const colorTheme = stock.colorTheme

    const activeType = stock.active_type
    const pair = stock.pair
    let loading

    if (type === activeType) loading = stock.loading

    const request = (type, time, pair, frame) => {
        dispatch(requestThunk(type, time, pair, frame))
    }

    return (
        <Card title={title} type={type} request={request} data={data} activeTime={activeTime}
            activeRow={activeRow} colorTheme={colorTheme} activeType={activeType} pair={pair}
            loading={loading}
        />
    )
}

