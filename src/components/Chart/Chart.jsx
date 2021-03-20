import React, { Component } from 'react'
import "./Chart.css"
import { Line } from 'react-chartjs-2'
import numeral from 'numeral'
import ghost from "../../assets/Ghost.gif"

const options = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "nearest",
        intersect: false,
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "YYYY-MM-DD",
                    tooltipFormat: "ll",
                },

            }
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
                ticks: {
                    callback: function (value, index, values) {
                        return numeral(value).format("0a")
                    }
                }

            }
        ]
    },

}

export default function Chart({ data }) {
    return (
        <div className="chart">
            {data && data.length ?

                <Line options={options}
                    data={{
                        datasets: [
                            {
                                backgroundColor: "rgba(216,240,250,1)",
                                borderColor: "rgba(117,134,150,1)",
                                pointHoverBackgroundColor: "#000000",
                                data: data,
                            }],
                    }} />
                :
                <img className="preloader" src={ghost} alt="" />
            }
        </div>
    )
}

