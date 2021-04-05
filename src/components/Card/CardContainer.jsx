import React from 'react'
import Card from './Card'
import { requestThunk } from "../../store/stock-reducer"
import { connect, useDispatch, useSelector } from 'react-redux';


export default function CardContainer({ type, title }) {
    const dispatch = useDispatch()
    const stock = useSelector(({ stock }) => stock)
    
    const data = stock[type]
    const activeRow = stock.ACTIVE[type].pair
    const activeTime = stock.ACTIVE[type].time
    const colorTheme = stock.colorTheme

    const request = (type, time, pair) => {
        dispatch(requestThunk(type, time, pair))
    }

    return (
        <div>
            <Card title={title} type={type} request={request} data={data} activeTime={activeTime} 
            activeRow={activeRow} colorTheme={colorTheme}/>
        </div>
    )
}

