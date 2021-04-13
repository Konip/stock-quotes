import React from 'react'
import { initialStockMarket } from './../../db/initial';
import './StockMarket.css'
import { requestThunk } from '../../store/stock-reducer';
import StockMarketCard from './StockMarketCard';
import { useDispatch, useSelector } from 'react-redux';


export default function StockMarket({ location }) {
    const dispatch = useDispatch()
    const stock = useSelector(({ stock }) => stock)

    const path = location.pathname.slice(14)
    const data = initialStockMarket[path]

    const colorTheme = stock.colorTheme
    const request = (type, time, pair) => {
        dispatch(requestThunk(type, time, pair))
    }
  
    return (
        <div className="stock-markets">
            <div className="stock-markets-cards">
                {data.map(({ title,img }) => (
                    <StockMarketCard title={title} type={path} request={request} img={img}
                        colorTheme={colorTheme} />
                ))}
            </div>
        </div>
    )
}
