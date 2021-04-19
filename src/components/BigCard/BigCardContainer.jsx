import React from 'react'
import BigCard from './BigCard'
import { requestThunk } from "../../store/stock-reducer"
import { useDispatch, useSelector } from 'react-redux'

export default function BigCardContainer() {
    const dispatch = useDispatch()
    const stock = useSelector(({ stock }) => stock)

    const activeType = stock.active_type
    const data = stock.CHART
    const activeRow = stock.ACTIVE[activeType].pair
    const activeTime = stock.ACTIVE[activeType].time
    const colorTheme = stock.colorTheme

    const description = stock.description.description
    const sector = stock.description.sector
    const industry = stock.description.industry
    const currency = stock.description.currency
    const country = stock.description.country
    const symbol = stock.description.symbol
    const companyName = stock.description.companyName
    const exchange = stock.description.exchange
    const website = stock.description.website
    const CEO = stock.description.CEO
    const employees = stock.description.employees
    const paper = stock.description.paper

    const request = (type, time, pair) => {
        dispatch(requestThunk(type, time, pair))
    }

    return (
        <div>
            <BigCard type={activeType} request={request} data={data} activeRow={activeRow} activeTime={activeTime} colorTheme={colorTheme}
                description={description} sector={sector} industry={industry} currency={currency} country={country} symbol={symbol}
                companyName={companyName} exchange={exchange} website={website} CEO={CEO} employees={employees} paper={paper}
            />
        </div>
    )
}