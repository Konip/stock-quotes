import React from 'react'
import { Link } from 'react-router-dom'
import "./Row.css"


export default function Row({ pair, name, img, type, active, index, onClickItem }) {
    return (
        <div className={!active && index == 0 ? "row-active" : active === pair ? "row-active" : "row"}
            onClick={() => onClickItem(pair)}>
            <div className="row-wrapper">
                <div className="section">
                    <img className={`logo-${type}`} src={img} alt="" />
                </div>
                <div className="section">
                    <Link className="link" to={`markets`}>
                        <span className="currency-pair">
                            {pair}
                        </span>
                    </Link>
                    {/* <Link className="link" to={`markets/${pair}`}>
                        <span className="currency-pair">
                            {pair}
                        </span>
                    </Link> */}
                </div>
                <div className="section">
                    <span className="name">
                        {name}
                    </span>
                </div>
            </div>
        </div>
    )
}
