import React from 'react'
import { Link } from 'react-router-dom'
import "./MarketRow.css"

export default function MarketRow({ pair, name, img, type, onClickItem, colorTheme, frame }) {
    
    return (
        <div className={colorTheme ? "row-light" : "row-dark"} onClick={() => onClickItem(pair,frame)}>
            <div className="market-row-wrapper">
                <div className="market-section1">
                    <img className={`logo-${type}`} src={img} alt="" />
                </div>
                <div className="market-section2">
                    <Link className="link" to={'/markets'}>
                        <span className={colorTheme ? "currency-pair-light" : "currency-pair-dark"}>
                            {pair}
                        </span>
                    </Link>
                </div>
                <div className="market-section3">
                    <span className={colorTheme ? "name-light" : "name-dark"}>
                        {name}
                    </span>
                </div>
            </div>
        </div>
    )
}
