import React from 'react'
import "./Row.css"
export default function Row({ row }) {
    return (

        <div className="row">
            {console.log(row)}
            {row &&
                <div className="row-wrapper">
                    <div className="section"></div>
                    <div className="section">
                        <span className="currency-pair">
                            {`${row["1. From_Currency Code"]} / `}
                            {row["3. To_Currency Code"]}
                        </span>
                        <span className="name">
                            {`${row["2. From_Currency Name"]} / `}
                            {row["4. To_Currency Name"]}
                        </span>
                    </div>
                    <div className="section price">
                    {row["5. Exchange Rate"]}
                    </div>
                </div>
            }
        </div>
    )
}
