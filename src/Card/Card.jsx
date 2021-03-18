import Chart from '../Chart/Chart'
import "./Card.css"
import React from 'react'
import Row from '../Row/Row'

export default function Card({ data, title, row }) {
    return (
        <div className="card">
            <div className="wrap">
                <div className="title">
                    <span>{title}</span>
                </div>
                <Chart data={data} />
                <div className="rows">
                    <Row row={row}/>
                    {/* <Row row={row}/> */}
                    
                </div>
            </div>
        </div>
    )
}

