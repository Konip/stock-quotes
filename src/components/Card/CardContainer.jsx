import React from 'react'
import Card from './Card'
import { requestThunk } from "../../store/stock-reducer"
import { useDispatch, useSelector } from 'react-redux';


export default function CardContainer({ type, title }) {
    const dispatch = useDispatch()
    const stock = useSelector(({ stock }) => stock)
    
    console.log('Card')
    console.log(stock)
    const data = stock[type]
    const activeRow = stock.ACTIVE[type].pair
    const activeTime = stock.ACTIVE[type].time
    const colorTheme = stock.colorTheme
    // console.log(data)
    
    const request = (type, time, pair, small) => {
        dispatch(requestThunk(type, time, pair, small))
    }

    return (
        <div>
            <Card title={title} type={type} request={request} data={data} activeTime={activeTime}
                activeRow={activeRow} colorTheme={colorTheme} />
        </div>
    )
}

