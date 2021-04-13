import React from 'react'
import BigCard from './BigCard'
import { requestThunk } from "../../store/stock-reducer"
import { useDispatch, useSelector } from 'react-redux'
import { initial1 } from '../../db/initial'


export default function BigCardContainer() {
    const dispatch = useDispatch()
    const stock = useSelector(({ stock }) => stock)

    // console.log(stock)

    const activeType = stock.active_type
    const data = stock.CHART
    const activeRow = stock.ACTIVE[activeType].pair
    const activeTime = stock.ACTIVE[activeType].time
    const colorTheme = stock.colorTheme
    const description = stock.description.description
    const sector = stock.description.sector
    const industry = stock.description.industry
    const currency = stock.description.currency

    const request = (type, time, pair) => {
        dispatch(requestThunk(type, time, pair))
    }

    return (
        <div>
            <BigCard type={activeType} request={request} data={data} description={description} sector={sector} industry={industry} currency={currency}
                activeRow={activeRow} activeTime={activeTime} colorTheme={colorTheme} />
        </div>
    )
}


