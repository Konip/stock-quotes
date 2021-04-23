import React from 'react'
import './StockMarketCard.css'
import { initialForex } from './../../db/initial';
import MarketRow from './MarketRow';

export default function StockMarketCard({ title, type, request, colorTheme, img, pair }) {

    let data = initialForex[type]
    if (pair) data = data[pair]

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

                <div className="market-rows">
                    {data.map((i, index) => (
                        < MarketRow key={`${i.pair}${i.name}`} pair={i.pair} name={i.name} img={colorTheme ? i.img : i.imgD} type={type}
                            onClickItem={(pair) => req(type, '1D', pair)} colorTheme={colorTheme}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
