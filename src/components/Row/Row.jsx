import React from 'react'
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
                    <span className="currency-pair">
                        {pair}
                    </span>
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
