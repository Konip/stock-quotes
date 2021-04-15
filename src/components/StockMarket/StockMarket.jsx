import React from 'react'
import { initialTitle } from './../../db/initial';
import './StockMarket.css'
import { requestThunk } from '../../store/stock-reducer';
import StockMarketCard from './StockMarketCard';
import { useDispatch, useSelector } from 'react-redux';


export default function StockMarket({ location }) {
    const dispatch = useDispatch()
    const stock = useSelector(({ stock }) => stock)

    const path = location.pathname.slice(14)
    const colorTheme = stock.colorTheme
   
    const data = initialTitle[path]

    const request = (type, time, pair) => {
        dispatch(requestThunk(type, time, pair))
    }

    return (
        <div className="stock-markets">
            <div className="stock-markets-cards">
                {data.map((i) => (
                    <StockMarketCard title={i.title} type={path} request={request} img={colorTheme ? i.img : i.imgD}
                        colorTheme={colorTheme} pair={i.pair} />
                ))}
            </div>
        </div>
    )
}
