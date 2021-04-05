import React from 'react'
import BigCard from './BigCard'
import { requestThunk } from "../../store/stock-reducer"
import { useDispatch, useSelector } from 'react-redux'


export default function BigCardContainer() {
    const dispatch = useDispatch()
    const stock = useSelector(({ stock }) => stock)

    const activeType = stock.active_type
    const data = stock[activeType]
    const activeRow = stock.ACTIVE[activeType].pair
    const activeTime = stock.ACTIVE[activeType].time
    const colorTheme = stock.colorTheme
  
    const request = (type, time, pair) => {
        dispatch(requestThunk(type, time, pair))
    }

    return (
        <div>
            <BigCard type={activeType} request={request} data={data}  
            activeRow={activeRow} activeTime={activeTime} colorTheme={colorTheme}/>
        </div>
    )
}


