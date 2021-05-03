import React from 'react'
import { Link } from 'react-router-dom'
import "./Row.css"


export default function Row({ pair, name, img, type, active, index, onClickItem, colorTheme, frame }) {
    return (
        <div className={!active && index === 0 ? "row-light-active" : active === pair && colorTheme ? "row-light-active" :
            active === pair && !colorTheme ? "row-dark-active" : active !== pair && colorTheme ? "row-light" : "row-dark"}
            onClick={() => onClickItem(pair, frame)}>
            <div className="row-wrapper">
                <div className="section1">
                    <img className={`logo-${type}`} src={img} alt="" />
                </div>
                <div className="section2">
                    <Link className="link" to={`/markets`}>
                        <span className={colorTheme ? "currency-pair-light" : "currency-pair-dark"}>
                            {pair}
                        </span>
                    </Link>
                </div>
                <div className="section3">
                    <span className={colorTheme ? "name-light" : "name-dark"}>
                        {name}
                    </span>
                </div>
            </div>
        </div>
    )
}
