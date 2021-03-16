import Chart from '../Chart/Chart'
import "./Card.css"
import React from 'react'

export default function Card({ data, }) {
    return (
        <div className="card">
            <div className="wrap">
                <div className="title">
                    <span>Индексы</span>
                </div>
                <Chart data={data} />
            </div>
        </div>
    )
}

