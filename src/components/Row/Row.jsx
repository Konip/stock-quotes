import React from 'react'
import { Link } from 'react-router-dom'
import "./Row.css"


export default function Row({ pair, name, img, type, active, index, onClickItem, colorTheme }) {
    return (
        <div className={!active && index == 0 ? "row-light-active" : active === pair && colorTheme ? "row-light-active" :
            active === pair && !colorTheme ? "row-dark-active" : active !== pair && colorTheme ? "row-light" : "row-dark"}
            onClick={() => onClickItem(pair)}>
            <div className="row-wrapper">
                <div className="section">
                    <img className={`logo-${type}`} src={img} alt="" />
                </div>
                <div className="section">
                    <Link className="link" to={`markets`}>
                        <span className={colorTheme ? "currency-pair-light" : "currency-pair-dark"}>
                            {pair}
                        </span>
                    </Link>
                </div>
                <div className="section">
                    <span className={colorTheme ? "name-light" : "name-dark"}>
                        {name}
                    </span>
                </div>
            </div>
        </div>
    )
}
