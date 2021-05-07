import React from 'react'
import './StockMarketCard.css'
import { initialMarket } from './../../db/initial';
import MarketRow from './MarketRow';
import { Link } from 'react-router-dom';

export default function StockMarketCard({ title, type, request, colorTheme, img, pair }) {

    let data = initialMarket[type]
    if (pair) data = data[pair]

    function req(type, time, pair, frame) {
        request(type, time, pair, frame)
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
                        <Link to={'/markets'}>
                            < MarketRow key={`${i.pair}${i.name}`} pair={i.pair} name={i.name} img={colorTheme ? i.img : i.imgD} type={type}
                                frame={i.time}
                                onClickItem={(pair, frame) => req(type, '1W', pair, frame)} colorTheme={colorTheme}
                            />
                        </Link>

                    ))}
                </div>
            </div>
        </div>
    )
}
