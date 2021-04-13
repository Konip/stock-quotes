import React from 'react'
import './StockMarketCard.css'
import { initial } from './../../db/initial';
import Row from '../Row/Row';

export default function StockMarketCard({ title, type, request, colorTheme, img }) {

    function req(type, time, pair) {
        request(type, time, pair)
    }
    return (
        <div className={colorTheme ? "market-card-light" : "market-card-dark"}>
            <div className="wrap">
                <div className={colorTheme ? "market-title-light" : "market-title-dark"}>
                    <img className='flag' src={img} alt="" />
                    <span>{title}</span>
                </div>

                <div className="rows">
                    {initial[type].map((arr, index) => (
                        < Row key={`${arr.pair}${arr.name}`} pair={arr.pair} name={arr.name} img={arr.img} type={type}
                            index={index} onClickItem={(pair) => req(type, '1D', pair)}
                            colorTheme={colorTheme}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
