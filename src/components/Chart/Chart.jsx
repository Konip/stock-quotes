import React from 'react'
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
    plugins: {
        crosshair: {
            line: {
                color: 'black',  // crosshair line color
                width: 1        // crosshair line width
            },
            sync: {
                enabled: false,
            },
            zoom: {
                enabled: false,
            },
        }
    },
    scales: {
        xAxes: [
            {
                gridLines: {
                    display: true,
                },
                type: "time",
                time: {
                    unit: "day",
                    tooltipFormat: "ll",

                },
                // distribution: 'series',
            }
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
            }
        ]
    },

}
const options1Day = {
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
    plugins: {
        crosshair: {
            line: {
                color: 'black',  // crosshair line color
                width: 1        // crosshair line width
            },
            sync: {
                enabled: false,
            },
            zoom: {
                enabled: false,
            },
        }
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "YYYY-MM-DD HH:mm",
                    tooltipFormat: "D MMM HH:mm",
                },
            }
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
            }
        ]
    },

}

export default function Chart({ data, active }) {
    console.log(active)
    return (
        <div className="chart">
            {data && data.length ?

                <Line options={active == "1D" ? options1Day : options}

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

