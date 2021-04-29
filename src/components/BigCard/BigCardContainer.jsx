import React from 'react'
import BigCard from './BigCard'
import { requestThunk } from "../../store/stock-reducer"
import { useDispatch, useSelector } from 'react-redux'
import { initialReducer } from '../../db/initial'

export default function BigCardContainer() {
    const dispatch = useDispatch()
    const stock = useSelector(({ stock }) => stock)

    const activeType = stock.active_type
    const data = stock.CHART
    const activeRow = stock.ACTIVE[activeType].pair
    const pair = stock.pair

    let activeTime
    if (initialReducer[activeType][pair]) activeTime = stock.ACTIVE[activeType].time
    else activeTime = stock.chartTime
    const colorTheme = stock.colorTheme
    const frame = stock.timeFrames


    let currency
    if (activeType === 'CRYPTO' || 'FOREX') currency = stock.currency.currency
    if (activeType === 'STOCK') currency = stock.description.currency

    // description
    const description = stock.description.description
    const sector = stock.description.sector
    const industry = stock.description.industry
    const country = stock.description.country
    const symbol = stock.description.symbol
    const name = stock.description.name
    const secCurrency = stock.currency.name
    const exchange = stock.description.exchange
    const website = stock.description.website
    const CEO = stock.description.CEO
    const employees = stock.description.employees
    const paper = stock.description.paper
    const headquarters = stock.description.headquarters
    const code = stock.description.code
    const demographics = stock.description.demographics

    const request = (type, time, pair, frame) => {
        dispatch(requestThunk(type, time, pair, frame))
    }

    return (
        <div>
            <BigCard type={activeType} request={request} data={data} activeRow={activeRow}
                activeTime={activeTime} colorTheme={colorTheme} description={description} sector={sector}
                industry={industry} currency={currency} country={country} symbol={symbol} name={name}
                exchange={exchange} website={website} CEO={CEO} employees={employees} paper={paper}
                headquarters={headquarters} code={code} frame={frame} pair={pair} secCurrency={secCurrency}
                demographics={demographics}
            />
        </div>
    )
}