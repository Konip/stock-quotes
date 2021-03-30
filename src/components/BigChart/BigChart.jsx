import React from 'react'
import { useSelector } from 'react-redux'
import Chart from '../Chart/Chart'
import "./BigChart.css"

export default function BigChart() {
    const stock = useSelector(({ stock }) => stock)
    const type = stock["ACTIVE"].type
    const time = stock["ACTIVE"].time
    const data = stock[type]
    console.log(data)
    console.log("render")
    
    return (
        <div className="big-chart">
            <div className="chart1">
                <Chart data={data} active={time} />
                {/* <h1>{time}</h1>
                <h1>{type}</h1> */}
            </div>
        </div>
    )
}
