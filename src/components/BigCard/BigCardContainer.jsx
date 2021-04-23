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
    console.log(activeType)
    let currency
    if (activeType === 'CRYPTO') currency = stock.currency
    else currency = stock.description.currency

    const description = stock.description.description
    const sector = stock.description.sector
    const industry = stock.description.industry

    const country = stock.description.country
    const symbol = stock.description.symbol
    const companyName = stock.description.companyName
    const exchange = stock.description.exchange
    const website = stock.description.website
    const CEO = stock.description.CEO
    const employees = stock.description.employees
    const paper = stock.description.paper
    const headquarters = stock.description.headquarters
    const code = stock.description.code

    const request = (type, time, pair) => {
        dispatch(requestThunk(type, time, pair))
    }

    return (
        <div>
            <BigCard type={activeType} request={request} data={data} activeRow={activeRow}
                activeTime={activeTime} colorTheme={colorTheme} description={description} sector={sector}
                industry={industry} currency={currency} country={country} symbol={symbol} companyName={companyName}
                exchange={exchange} website={website} CEO={CEO} employees={employees} paper={paper}
                headquarters={headquarters} code={code}
            />
        </div>
    )
}